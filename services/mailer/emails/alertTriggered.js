module.exports = {
  alertTriggeredEmail(requestBody) {
    return `
    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
            <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%">
                <tbody>
                    <tr>
                        <td style="background-color:#bb2124; padding:20px">
                            <h3 style="color:white">The Following Grafana Alert Has Been Triggered:</h3>
                            <h4 style="color:white">${requestBody.ruleName}</h4>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:#ededed; padding:20px">
                            <p>Hi Team Thunderbee,</p>
                            <p>Something isn't right. Here are the details of this notification:</p>
                            <ul>
                            <li>Panel URL: ${requestBody.ruleUrl}.</li>
                            <li>Current Value: ${requestBody.evalMatches[0].value}.</li>
                            <li>Responsible Metric: ${requestBody.evalMatches[0].metric}.</li>
                            <li>State: ${requestBody.state}.</li>
                            </ul>
                            <p>
                            Kind Regards, <br>
                            Data logging and telemetry mailer
                            </p>
                            <img src="cid:fine" width="1100" height="600">
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:#0C0C0C; padding:20px">
                            <table>
                                <tr>
                                    <td>
                                        <p style="color:#F2F2F2">For Grafana login credentials, see here
                                            <br>
                                            <a href="https://confluence-oss.seli.wh.rnd.internal.ericsson.com/x/26LKE">Thunderbee Resources Management</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </body>
    </html>
    `;
  },
};
