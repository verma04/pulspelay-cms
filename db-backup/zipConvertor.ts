import sendEmail from "./sendMail";

var AdmZip = require("adm-zip");

const zipDirectory = async (sourceDir: any, outPath: any, name: any) => {
  // zipping a file

  const outputFile = `backup/zip/${name}.zip`;
  async function createZipArchive() {
    try {
      const zip = new AdmZip();

      await zip.addLocalFolder(sourceDir);
      await zip.writeZip(outputFile);
      console.log(`Created ${outputFile} successfully`);
      return true;
    } catch (e) {
      console.log(`Something went wrong. ${e}`);
    }
  }
  await createZipArchive();

  setTimeout(function () {
    sendEmail({ attachments: outputFile });
  }, 60000);
};

export default zipDirectory;
