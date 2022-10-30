import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface TicketData {
  requester: string;
  subject: string;
  body: string;
}

const NewTicket = () => {
  const [step, setStep] = useState<number>(0);
  const [ticketData, setTicketData] = useState<TicketData>({
    body: "",
    requester: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("ticket data : ", ticketData);
    setTicketData({ ...ticketData, [name]: value });
  };

  return (
    <>
      <Stepper activeStep={step} orientation="vertical">
        <Step>
          <StepLabel>
            <Typography variant="button">Requester Info</Typography>
          </StepLabel>
          <StepContent>
            <TextField
              label="Requester"
              name="requester"
              value={ticketData.requester}
              onChange={(e) => handleChange(e)}
            />
            <StepSwitcher step={step} setStep={setStep} />
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            <Typography variant="button">Step 2</Typography>
          </StepLabel>
          <StepContent>
            step content 2
            <StepSwitcher step={step} setStep={setStep} />
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            <Typography variant="button">Attachements</Typography>
          </StepLabel>
          <StepContent>
            Attach Screnshots, Files, Images ...
            <StepSwitcher step={step} setStep={setStep} />
          </StepContent>
        </Step>
      </Stepper>
    </>
  );
};

export default NewTicket;

interface StepSwitcherProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepSwitcher: React.FC<StepSwitcherProps> = ({ step, setStep }) => {
  // where max steps = 3
  // updates component if this changes !
  return (
    <Stack direction="row" justifyContent="flex-start" gap={2}>
      {step !== 2 ? (
        <Button
          sx={{ mt: 1, mr: 1 }}
          onClick={() => setStep((prev) => prev + 1)}
          variant="contained"
        >
          Next
        </Button>
      ) : (
        <Button
          sx={{ mt: 1, mr: 1 }}
          onClick={() => alert("created new ticket !")}
          variant="contained"
        >
          Finish
        </Button>
      )}
      {step !== 0 && (
        <Button
          sx={{ mt: 1, mr: 1 }}
          onClick={() => setStep((prev) => prev - 1)}
          variant="outlined"
        >
          Go Back
        </Button>
      )}
    </Stack>
  );
};
