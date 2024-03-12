const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "src/reports",
  reportPath: "./src/reports",
  reportName: "Reporte de pruebas | Team: S13-07-n-node-react",
  pageTitle: "Test cases report",
  metadata: {
    browser: {
      name: "chrome",
      version: "Chromium",
    },
    device: "HP Pavilion Gaming Laptop 16",
    platform: {
      name: "Windows",
      version: "11 Pro",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "S13-07-n-node-react" },
      { label: "Type", value: "smoke test" },
      { label: "Version", value: "1.0" },
      { label: "CI / CD pipeline", value: "GitHub Actions" },
      { label: "Repository", value: "https://github.com/No-Country/s13-07-n-node-react.git" },
      { label: "Execution Start Time", value: "Nov 19th 2023" },
      { label: "Execution End Time", value: "Nov 19th 2023" },
      { label: "Web", value: "" },
    ],
  },
});