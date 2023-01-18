import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Modal } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ setShowChart, stats }) => {
    const data = {
        labels: Object.keys(stats),
        datasets: [
            {
                label: "No of products",
                data: Object.values(stats),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Modal
            show={true}
            onHide={() => setShowChart(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Categories in Catalogue
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Pie data={data} />
            </Modal.Body>
        </Modal>
    );
};
