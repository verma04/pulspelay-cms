import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, SubmitHandler } from "react-hook-form";

import Loading from "../../Loading/Loading";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ColorPicker from "@components/comman/color-picker/ColorPicker";
import { LoadingButton } from "@mui/lab";
import { useGetAllClient } from "@apolloo/actions";
import ImageUploadLabel from "../ImageUploadLabel";
import {
  useEditHomePageWork,
  useEditKpi,
} from "@apolloo/actions/homePage/homepage";

export default function Edit({ region }: any) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState(region.status);
  const { data, loading: load } = useGetAllClient();
  const handleClickOpen = () => {
    setOpen(region.id);
  };
  const [category, setCategory] = React.useState(region.work?.id);
  const [color, setColor] = React.useState(
    region.color ? region.color : "#ddd"
  );
  const [img, setImage] = React.useState(region.image);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const [add, { data: data2, error, loading }] = useEditKpi();

  const handleClose = () => {
    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    add({
      variables: {
        ...data,
        id: region.id,
        color,
      },
    });
  };

  React.useEffect(() => {
    {
      data2 && setOpen(false);
    }
  }, [data2]);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open === region.id} onClose={handleClose}>
        <form style={{ width: "35rem" }} onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Edit</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>

            {errors.title ? (
              <TextField
                {...register("title", { required: true })}
                fullWidth
                error
                defaultValue={region.title}
                {...(errors.title ? error : null)}
                id="standard-basic"
                label="Title"
                variant="standard"
                type={"Name"}
                helperText="Enter Name"
              />
            ) : (
              <TextField
                {...register("title", { required: true })}
                fullWidth
                defaultValue={region.title}
                {...(errors.title ? error : null)}
                id="standard-basic"
                label="Title"
                variant="standard"
              />
            )}

            <Box mt="2rem">
              {errors.description ? (
                <TextField
                  {...register("description", { required: true })}
                  fullWidth
                  error
                  defaultValue={region.description}
                  {...(errors.description ? error : null)}
                  id="standard-basic"
                  label="Description"
                  variant="standard"
                  type={"description"}
                  helperText="description"
                />
              ) : (
                <TextField
                  {...register("description", { required: true })}
                  fullWidth
                  defaultValue={region.description}
                  {...(errors.description ? error : null)}
                  id="standard-basic"
                  label="Description"
                  variant="standard"
                />
              )}
            </Box>
            <Box mt="2rem" className="input-field">
              <InputLabel id="demo-simple-select-disabled-label">
                ColorCode
              </InputLabel>
              <ColorPicker state={color} setState={setColor} />
              <input
                style={{ marginTop: "1rem" }}
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
              {/* {errors.projectName && (
          <span id="error">
            <Danger /> <li> Color Code is required</li>
          </span>
        )} */}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {loading ? (
              <LoadingButton loading variant="outlined">
                Fetch data
              </LoadingButton>
            ) : (
              <>
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
