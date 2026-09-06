import React from "react";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGetUser, useSetBlogStatus } from "@apolloo/actions";
const Status = ({ value }) => {
  const { data: { getUser } = {} } = useGetUser();
  const [add, { data: data2, error: err2, loading: loading3 }] =
    useSetBlogStatus();

  const [status, setStatus] = React.useState(value.row.original.publish);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = () => {
    const data = {
      id: value.row.original.id,

      status,
    };

    add({ variables: data });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const btn = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  console.log(data2);

  return (
    <>
      {getUser?.role?.toLowerCase()?.includes("admin") && (
        <div onClick={handleOpen}>
          {status ? (
            <Tooltip title="Published">
              <svg
                width="40px"
                height="40px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
              >
                <circle style={{ fill: "#25AE88" }} cx="25" cy="25" r="25" />
                <polyline
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                  }}
                  points="
	38,15 22,33 12,25 "
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </Tooltip>
          ) : (
            <Tooltip title="Pending">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd">
                  <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
                  <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF" />
                  <path d="M7 5.969L5.599 4.568a.29.29 0 0 0-.413.004l-.614.614a.294.294 0 0 0-.004.413L5.968 7l-1.4 1.401a.29.29 0 0 0 .004.413l.614.614c.113.114.3.117.413.004L7 8.032l1.401 1.4a.29.29 0 0 0 .413-.004l.614-.614a.294.294 0 0 0 .004-.413L8.032 7l1.4-1.401a.29.29 0 0 0-.004-.413l-.614-.614a.294.294 0 0 0-.413-.004L7 5.968z" />
                </g>
              </svg>
            </Tooltip>
          )}
        </div>
      )}

      {!getUser?.role?.toLowerCase()?.includes("admin") && (
        <>
          {status ? (
            <Tooltip title="Published">
              <svg
                width="40px"
                height="40px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
              >
                <circle style={{ fill: "#25AE88" }} cx="25" cy="25" r="25" />
                <polyline
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                  }}
                  points="
	38,15 22,33 12,25 "
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </Tooltip>
          ) : (
            <Tooltip title="Unpublished">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd">
                  <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
                  <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF" />
                  <path d="M7 5.969L5.599 4.568a.29.29 0 0 0-.413.004l-.614.614a.294.294 0 0 0-.004.413L5.968 7l-1.4 1.401a.29.29 0 0 0 .004.413l.614.614c.113.114.3.117.413.004L7 8.032l1.401 1.4a.29.29 0 0 0 .413-.004l.614-.614a.294.294 0 0 0 .004-.413L8.032 7l1.4-1.401a.29.29 0 0 0-.004-.413l-.614-.614a.294.294 0 0 0-.413-.004L7 5.968z" />
                </g>
              </svg>
            </Tooltip>
          )}
        </>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Publish Blog
          </Typography>
          {status ? (
            <Typography sx={{ mt: 2 }}>Current Status is published</Typography>
          ) : (
            <Typography sx={{ mt: 2 }}>
              Current Status is unpublished
            </Typography>
          )}

          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Button variant="contained" onClick={() => onSubmit()}>
              {status ? <>UnPublish</> : <>Publish</>}
            </Button>

            <Button
              onClick={handleClose}
              sx={{ marginLeft: "1rem" }}
              variant="outlined"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Status;
