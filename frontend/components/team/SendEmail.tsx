import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, SubmitHandler } from "react-hook-form";

import Loading from "../Loading/Loading";

import { LoadingButton } from "@mui/lab";
import Description from "@components/List/Description";
import { useSendEmail } from "@apolloo/actions";
import Danger from "@components/svg/Danger";

export default function SendEmail({ region }: any) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [state, setState] = React.useState(false);
  const [add, { data, error, loading }] = useSendEmail();
  const onSubmit = (data) => {
    add({
      variables: {
        id: region.id,
        ...data,
        message: state,
      },
    });
  };

  // {
  //   data &&
  //     enqueueSnackbar("Success", {
  //       variant: "success",
  //       preventDuplicate: true,
  //     }) &&
  //     setOpen(false);
  // }

  return (
    <>
      <Button onClick={() => setOpen(region.id)} variant="outlined">
        Send Email
      </Button>
      <Dialog open={open === region.id} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Send Mail ({region.memberName})</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <div className="input-field">
              <label>Subject</label>
              <input
                id={errors.subject ? "active" : ""}
                {...register("subject", { required: true })}
                placeholder="subject"
              />
              {errors.subject && (
                <span id="error">
                  <Danger /> <li> Subject is required</li>
                </span>
              )}
            </div>
            <Description
              title={"Service Parargraph"}
              description={state}
              setDescription={setState}
            />
          </DialogContent>
          <DialogActions>
            {loading ? (
              <LoadingButton loading variant="outlined">
                Fetch data
              </LoadingButton>
            ) : (
              <>
                <Button type="submit" variant="contained">
                  Send
                </Button>
              </>
            )}
            <Button onClick={() => setOpen(false)} variant="outlined">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
