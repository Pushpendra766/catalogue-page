import { React, useState } from "react";
import { NavBar } from "./Navbar";
import { Catalogue } from "./Catalogue";
import { Button, Alert } from "react-bootstrap";
import { PieChart } from "./PieChart";

export const Homepage = () => {
    const [category, setCategory] = useState();
    const [showChart, setShowChart] = useState(false);
    const [stats, setStats] = useState({});
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <NavBar setCategory={setCategory} setLoading={setLoading} />
            <Alert variant="warning" className={loading || "d-none"}>
                Loading....
            </Alert>
            <Catalogue
                category={category}
                setStats={setStats}
                setLoading={setLoading}
            />
            <Button
                onClick={() => setShowChart(true)}
                style={{ position: "fixed", bottom: "3rem", right: "4rem" }}
            >
                Analyse
            </Button>
            {showChart && (
                <PieChart setShowChart={setShowChart} stats={stats} />
            )}
        </div>
    );
};
