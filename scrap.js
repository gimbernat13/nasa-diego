<Col lg={4}>
              <DropdownButton
                variant="secondary"
                id="dropdown-item-button"
                title="Choose Mission"
              >
                <Dropdown.Item
                  onClick={() => this.props.onSelectedMission("Curiosity")}
                  id="Curiosity"
                  as="button"
                >
                  Curiosity
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.props.onSelectedMission("Opportunity")}
                  id="Opportunity"
                  as="button"
                >
                  Opportunity
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.props.onSelectedMission("Spirit")}
                  id="Spirit"
                  as="button"
                >
                  Spirit
                </Dropdown.Item>
              </DropdownButton>
            </Col>


   <Row>
            <Col lg={12}>
              <h4 className="text-justify">Mars Curiosity Rover Photos</h4>
              {/* <span>Powered by NASA API</span> */}
              <p>
                Select a <span className="deepsky">Mission</span> a{" "}
                <span className="deepsky">Camera </span>and
                <span className="deepsky"> Earth Date</span> to view mission's photos.
              </p>
              <span>Cameras:</span>
              <ul>
                <li>
                  <span className="deepsky">FHAZ</span> - Front Hazard Avoidance
                  Camera
                </li>
                <li>
                  <span className="deepsky">RHAZ</span> - Rear Hazard Avoidance
                  Camera
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
        