import "./css/index.css";
import "./js/index.js";
import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function CalendarPickers() {
  return (
    <>
      <section>
        <p>hola desde pickers</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            defaultValue={dayjs("2022-04-17")}
            slotProps={{
              actionBar: {
                actions: ["today"],
              },
            }}
          />
        </LocalizationProvider>
      </section>
    </>
  );
}
