import React, { useState } from "react";
import { Note } from "./models/note.model";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setnotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetinggdgdgd",
      text: "Meeting is Scheduled",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  console.log(notes);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setnotes={setnotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setnotes={setnotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
