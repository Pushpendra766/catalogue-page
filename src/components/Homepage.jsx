import { React, useState } from "react";
import { NavBar } from "./Navbar";
import { Catalogue } from "./Catalogue";
import { Button } from "react-bootstrap";
import { PieChart } from "./PieChart";

export const Homepage = () => {
    const [category, setCategory] = useState();
    const [showChart, setShowChart] = useState(false);
    const [stats, setStats] = useState({});
    console.log(stats);
    return (
        <div>
            <NavBar setCategory={setCategory} />
            <Catalogue category={category} setStats={setStats} />
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
