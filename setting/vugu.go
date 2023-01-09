func HttpRequestPostJson(c context.Context, httpUrl string, reqBody interface{}, header map[string]string) (respBody []byte, err error) {
	startT := time.Now()
	b, err := json.Marshal(reqBody)
	if err != nil {
		return
	}
	bodyRaw := bytes.NewBuffer(b)
	req, err := http.NewRequest("POST", httpUrl, bodyRaw)
	if err != nil {
		return
	}

	// 默认header
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("x-tt-env", envTag())
	logid, _ := ctxvalues.LogID(c)
	req.Header.Add("x-tt-logid", logid)
	// 增加jwtToken
	jwtToken, err := generator.Generate(c, JWT_SECRET)
	if err != nil {
		return
	}
	req.Header.Add("X-Jwt-Token", jwtToken)
	if header != nil {
		for key, value := range header {
			req.Header.Add(key, value)
		}
	}
	logs.CtxInfo(c, "req:%v", req)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return
	}

	defer func() {
		_ = resp.Body.Close()
	}()

	respBody, err = ioutil.ReadAll(resp.Body)
	tc := time.Since(startT)
	logs.CtxInfo(c, "service_request(times:%v, url:%v, method:POST, body:%v resp:%+v)", tc, httpUrl, string(b), string(respBody))
	return
}