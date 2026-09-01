import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import moment from "moment";
import { useRouter } from "next/router";
import { useGetAllContactForm } from "../../apollo/actions";
import GeneratePDF from "./ReportGenerator";
import { CSVLink, CSVDownload } from "react-csv";
import AppLoading from "@components/Loading/AppLoading";
function Concierge() {
  const { loading, data, error } = useGetAllContactForm();

  const router = useRouter();

  const [active, setActive] = React.useState("box");
  if (loading) {
    return <AppLoading />;
  }

  const date = Date().split(" ");

  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

  const arr = [];
  data.getAllContactusForm.forEach((element) => {
    const data = {
      Name: element.name,
      Phone: element.phone,
      Email: element.email,
      message: element.message,
      organization: element.organization,
      services: element.services,
      solutions: element.solutions,
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

              <h4>COntact Form</h4>
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
