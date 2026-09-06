import React from "react";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from "react-select";
import {
  getAllRole,
  useAddAuthor,
  useGetAllActiveTeam,
  useGetUser,
  useSetBlogStatus,
} from "@apolloo/actions";
const ManageAuthor = ({ value }) => {
  const { data: { getUser } = {} } = useGetUser();
  const [add, { data: data2, error: err2, loading: loading3 }] = useAddAuthor();

  const { data, loading } = getAllRole();

  const [status, setStatus] = React.useState(value.row.original.publish);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = () => {
    const data = {
      id: value.row.original.id,

      author: JSON.stringify(author?.map((t) => t.value)),
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

  const { data: team, loading: load } = useGetAllActiveTeam();

  console.log(
    value.row.original.author?.map((t) => ({
      value: t?.id,
      label: t?.member?.memberName,
    }))
  );
  const [author, setAuthor] = React.useState(
    value.row.original.author?.map((t) => ({
      value: t?.id,
      label: t?.member?.memberName,
    }))
  );

  return (
    <>
      {getUser?.role?.toLowerCase()?.includes("admin") && (
        <div style={{ marginTop: "1rem" }} onClick={handleOpen}>
          <button>Edit</button>
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Author
          </Typography>
          <Select
            options={data?.getAllRole?.map((t) => ({
              value: t?.id,
              label: t?.member?.memberName,
            }))}
            isMulti
            defaultValue={author}
            onChange={setAuthor}
          />

          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Button variant="contained" onClick={() => onSubmit()}>
              Update
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

export default ManageAuthor;
