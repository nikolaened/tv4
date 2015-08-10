describe("Load language file", function () {
	var api = tv4.freshApi();

	api.setErrorReporter(function (error, data, schema) {
		assert.deepEqual(data, 5);
		assert.deepEqual(schema, {minimum: 10});
		return 'Code: ' + error.code;
	});

	var res = api.validateResult(5, {minimum: 10});
	assert.isFalse(res.valid);
	assert.equal(res.error.message, 'Code: 101');
});

describe("Load language file", function () {
	var api = tv4.freshApi();

	api.setErrorReporter(function (error, data, schema) {
		assert.deepEqual(data, 5);
		assert.deepEqual(schema, {minimum: 10});
		return null;
	});

	var res = api.validateResult(5, {minimum: 10});
	assert.isFalse(res.valid);
	assert.isString(res.error.message);
});
