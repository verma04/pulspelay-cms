import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import moment from "moment";
import { useRouter } from "next/router";
import { useGetAllCarerForm } from "../../apollo/actions";
import GeneratePDF from "./ReportGenerator";
import { CSVLink, CSVDownload } from "react-csv";
import AppLoading from "@components/Loading/AppLoading";
function Concierge() {
  const { loading, data, error } = useGetAllCarerForm();

  const router = useRouter();

  const [active, setActive] = React.useState("box");
  if (loading) {
    return <AppLoading />;
  }

  const date = Date().split(" ");

  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

  const arr = [];
  data.getAllCareer.forEach((element) => {
    console.log(element);

    const data = {
      JobTitle: element.candidatePosition,
      Name: element.candidateName,
      Phone: element.candidatePhone,
      Email: element.candidateEmail,
      Location: element.state,
      CvUrl: `https://pulseplaydigital.sgp1.digitaloceanspaces.com${element.candidateCv}`,
      ReferrerName: element.referrer.referrerName,
      ReferrerEmail: element.referrer.referrerEmail,
      ReferrerPhone: element.referrer.referrerPhone,
      ReferrerLocation: element.referrer.referrerLocation,
      Message: element.candidateMessage,
      Date: moment(element.createdAt).format("ll ,  h:mm:ss a"),
    };

    arr.push(data);
  });

  return (
    <Section>
      <div className="flex">
        <div className="flex-2">
          <div className="top">
            <div className="left">
              <h3> HOME</h3>

              <h4>Career Form</h4>
            </div>

            <div className="right">
              <button
                style={{ marginRight: "1rem" }}
                className="btn btn-primary"
                onClick={() => GeneratePDF(arr)}
              >
                Download Pdf
              </button>
              <CSVLink data={arr} filename={`report_${dateStr}.csv`}>
                <button>Download CSV</button>
              </CSVLink>
            </div>
          </div>
        </div>

        <Item active={active} data={data} loading={loading} />
      </div>
    </Section>
  );
}

export default Concierge;
