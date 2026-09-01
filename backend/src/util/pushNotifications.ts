var FCM = require("fcm-node");
var serverKey =
  "AAAAi9o_Rm8:APA91bH4Yu4ZqU2jNHPeffo3-9I2DfMCzInAVtVrtFB5Xw746I1brDMZAJMdGPVIq4t8tS5N9KBhq3Xq62iMnp7ZUggUDz2RDDkyqsr-gYOuCEtBH0KjCt7c5itHIEzgWgkWEezuL4Zh";
const pushNotification = (title: any, message: any) => {
  try {
    var fcm = new FCM(serverKey);
    var messages = {
      //this may vary according to the message type (single recipient, multicast, topic, et cetera)
      to: "fRTRzTGnQGe6sGUSpHGecA:APA91bERRvwu43BzJLnCGyQrGpU1a-4DRz9PDyO1LkJtR_XMZL7uZHn0lLeKl8GZuQ5ToIk-VktP3gO3Pc4hgxvBP3bCQBxDUAY-l7Ap4QQ34iRi8hXkyyiQv6seyv5Nlly_IvfGcO2g",
      collapse_key: "your_collapse_key",

      notification: {
        title: title,
        body: message,
      },

      data: {
        //you can send only notification or only data(or include both)
        my_key: "my value",
        my_another_key: "my another value",
      },
    };

    fcm.send(messages, function (err: any, response: any) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully sent with response: ", response);
      }
    });
  } catch (error) {
    console.warn(error);
  }
};

export { pushNotification };
