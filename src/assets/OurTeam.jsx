import React from "react";
import Card from "react-bootstrap/Card";

function OurTeam() {
  return (
    <div className="text-center py-5 ">
      <h1>Our Team</h1>
      <div className="d-flex justify-align-center justify-content-evenly mt-5">
      <Card className="border-0" style={{ width: "16rem" }}>
        <Card.Img  variant="top" src="./person_1.jpg" />
        <Card.Body>
          <Card.Title>Lawson Arnold</Card.Title>
          <Card.Text className="text-secondary">CEO, Founder, Atty.</Card.Text>
          <Card.Text className="text-secondary">
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Learn More</Card.Link>
        </Card.Body>
      </Card>

      <Card className="border-0" style={{ width: "16rem" }}>
        <Card.Img  variant="top" src="./person_2.jpg" />
        <Card.Body>
          <Card.Title>Jeremy Walkar</Card.Title>
          <Card.Text className="text-secondary">CEO, Founder, Atty.</Card.Text>
          <Card.Text className="text-secondary">
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Learn More</Card.Link>
        </Card.Body>
      </Card>

      <Card className="border-0" style={{ width: "16rem" }}>
        <Card.Img  variant="top" src="./person_3.jpg" />
        <Card.Body>
          <Card.Title>Pratik White</Card.Title>
          <Card.Text className="text-secondary">CEO, Founder, Atty.</Card.Text>
          <Card.Text className="text-secondary">
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Learn More</Card.Link>
        </Card.Body>
      </Card>

      <Card className="border-0" style={{ width: "16rem" }}>
        <Card.Img  variant="top" src="./person_4.jpg" />
        <Card.Body>
          <Card.Title>Kathryn Ryan</Card.Title>
          <Card.Text className="text-secondary">CEO, Founder, Atty.</Card.Text>
          <Card.Text className="text-secondary">
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Learn More</Card.Link>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default OurTeam;
