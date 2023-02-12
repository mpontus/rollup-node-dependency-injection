const assert = require("assert");
const { container } = require("..");

const mailer = container.get("mailer");
assert.equal(mailer.transport, "sendmail");
