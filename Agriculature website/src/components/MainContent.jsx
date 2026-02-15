import { ThermometerSun } from "lucide-react";
import { Card, Badge } from "react-bootstrap";

const MainContent = ({ activeCat, category }) => {
    console.log(category);


    const crops = [
        {
            title: "Wheat (Gandum)",
            season: "Winter (Rabi)",
            description:
                "Wheat requires cool temperatures during growth and bright sunshine during harvest.",
            region: "Punjab & Sindh Valleys",
        },
        {
            title: "Rice (Chawal)",
            season: "Summer (Kharif)",
            description:
                "Rice needs plenty of water and grows best in hot and humid climates.",
            region: "Sindh & Southern Punjab",
        },
        {
            title: "Rice (Chawal)",
            season: "Summer (Kharif)",
            description:
                "Rice needs plenty of water and grows best in hot and humid climates.",
            region: "Sindh & Southern Punjab",
        },
        {
            title: "Rice (Chawal)",
            season: "Summer (Kharif)",
            description:
                "Rice needs plenty of water and grows best in hot and humid climates.",
            region: "Sindh & Southern Punjab",
        },
        {
            title: "Rice (Chawal)",
            season: "Summer (Kharif)",
            description:
                "Rice needs plenty of water and grows best in hot and humid climates.",
            region: "Sindh & Southern Punjab",
        },
    ];

    return (
        <Card className="shadow-sm border-0 rounded-4"> {/* outer card*/}
            <Card.Body>

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold mb-0">{activeCat}</h3>
                    <Badge bg="success" pill>
                        {category[0]?.items?.length || 0} Items Found
                    </Badge>
                </div>

                {/* Inner cards */}
                {category[0]?.items?.map((cat, i) => (

                    <Card className="mb-3  border-0 border-start border-success border-4 shadow-lg rounded-4">
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <h5 className="fw-bold text-success">{cat.name}</h5>
                                <Badge bg="warning" text="dark">
                                     <ThermometerSun size={14} className="me-1" />
                                    {cat.season}
                                </Badge>
                            </div>

                            <p className="mt-2 text-muted">{cat.description}</p>
                        </Card.Body>
                    </Card>
                ))
                }
            </Card.Body>
        </Card>
    );
};

export default MainContent;
