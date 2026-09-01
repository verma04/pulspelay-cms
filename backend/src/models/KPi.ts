const { model, Schema } = require("mongoose");

const kpiSchema = new Schema(
  {
    title: String,
    description: String,
    sort: Number,
    color: String,
  },
  {
    timestamps: true,
  }
);

const KPI = model("kpi", kpiSchema);

export { KPI };
