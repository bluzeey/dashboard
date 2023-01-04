import React from "react";
import SidebarMenu from "react-bootstrap-sidebar-menu";

function Sidebar() {
  return (
    <SidebarMenu defaultExpanded={true} expand="lg" hide="md">
      <SidebarMenu.Collapse>
        <SidebarMenu.Header>
          <SidebarMenu.Brand
            title="React-Bootstrap"
            href="https://github.com/react-bootstrap/react-bootstrap"
          >
            <span className="react-bootstrap-img" />
          </SidebarMenu.Brand>
          <SidebarMenu.Toggle />
        </SidebarMenu.Header>
        <SidebarMenu.Body>
          <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link eventKey="setup">
              <SidebarMenu.Nav.Icon>1</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>How to install</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link eventKey="usage">
              <SidebarMenu.Nav.Icon>2</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Usage</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link eventKey="overview">
              <SidebarMenu.Nav.Icon>3</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Overview</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Sub eventKey={0}>
              <SidebarMenu.Sub.Toggle>
                <SidebarMenu.Nav.Icon />
                <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
              </SidebarMenu.Sub.Toggle>
              <SidebarMenu.Sub.Collapse>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link eventKey="sidebarmenu">
                    <SidebarMenu.Nav.Icon>4</SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>SidebarMenu</SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                  <SidebarMenu.Sub eventKey={1}>
                    <SidebarMenu.Sub.Toggle>
                      <SidebarMenu.Nav.Icon />
                      <SidebarMenu.Nav.Title>
                        Built-in elements
                      </SidebarMenu.Nav.Title>
                    </SidebarMenu.Sub.Toggle>
                    <SidebarMenu.Sub.Collapse>
                      <SidebarMenu.Nav>
                        <SidebarMenu.Nav.Link eventKey="sidebarmenu.nav">
                          <SidebarMenu.Nav.Icon>4.1</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>
                            SidebarMenu.Nav
                          </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>

                        <SidebarMenu.Sub eventKey={2}>
                          <SidebarMenu.Sub.Toggle>
                            <SidebarMenu.Nav.Icon />
                            <SidebarMenu.Nav.Title>
                              Built-in elements
                            </SidebarMenu.Nav.Title>
                          </SidebarMenu.Sub.Toggle>
                          <SidebarMenu.Sub.Collapse>
                            <SidebarMenu.Nav>
                              <SidebarMenu.Nav.Link eventKey="sidebarmenu.nav.link">
                                <SidebarMenu.Nav.Icon>
                                  4.1.1
                                </SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>
                                  SidebarMenu.Nav.Link
                                </SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                              <SidebarMenu.Nav.Link eventKey="sidebarmenu.nav.item">
                                <SidebarMenu.Nav.Icon>
                                  4.1.2
                                </SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>
                                  SidebarMenu.Nav.Item
                                </SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                              <SidebarMenu.Nav.Link eventKey="sidebarmenu.nav.icon">
                                <SidebarMenu.Nav.Icon>
                                  4.1.3
                                </SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>
                                  SidebarMenu.Nav.Icon
                                </SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                              <SidebarMenu.Nav.Link eventKey="sidebarmenu.nav.title">
                                <SidebarMenu.Nav.Icon>
                                  4.1.4
                                </SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>
                                  SidebarMenu.Nav.Title
                                </SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>
                          </SidebarMenu.Sub.Collapse>
                        </SidebarMenu.Sub>

                        <SidebarMenu.Nav.Link eventKey="sidebarmenu.sub">
                          <SidebarMenu.Nav.Icon>4.2</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>
                            SidebarMenu.Sub
                          </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>

                        <SidebarMenu.Sub eventKey={3}>
                          <SidebarMenu.Sub.Toggle>
                            <SidebarMenu.Nav.Icon />
                            <SidebarMenu.Nav.Title>
                              Built-in elements
                            </SidebarMenu.Nav.Title>
                          </SidebarMenu.Sub.Toggle>
                          <SidebarMenu.Sub.Collapse>
                            <SidebarMenu.Nav>
                              <SidebarMenu.Nav.Link eventKey="sidebarmenu.sub.collapse">
                                <SidebarMenu.Nav.Icon>
                                  4.2.1
                                </SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>
                                  SidebarMenu.Sub.Collapse
                                </SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                              <SidebarMenu.Nav.Link eventKey="sidebarmenu.sub.toggle">
                                <SidebarMenu.Nav.Icon>
                                  4.2.2
                                </SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>
                                  SidebarMenu.Sub.Toggle
                                </SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>
                          </SidebarMenu.Sub.Collapse>
                        </SidebarMenu.Sub>

                        <SidebarMenu.Nav.Link eventKey="sidebarmenu.brand">
                          <SidebarMenu.Nav.Icon>4.3</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>
                            SidebarMenu.Brand
                          </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link eventKey="sidebarmenu.toggle">
                          <SidebarMenu.Nav.Icon>4.4</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>
                            SidebarMenu.Toggle
                          </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link eventKey="sidebarmenu.collapse">
                          <SidebarMenu.Nav.Icon>4.5</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>
                            SidebarMenu.Collapse
                          </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link eventKey="sidebarmenu.text">
                          <SidebarMenu.Nav.Icon>4.6</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>
                            SidebarMenu.Text
                          </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link eventKey="sidebarmenu.header">
                          <SidebarMenu.Nav.Icon>4.7</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>
                            SidebarMenu.Header
                          </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link eventKey="sidebarmenu.body">
                          <SidebarMenu.Nav.Icon>4.8</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>
                            SidebarMenu.Body
                          </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link eventKey="sidebarmenu.footer">
                          <SidebarMenu.Nav.Icon>4.9</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>
                            SidebarMenu.Footer
                          </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                      </SidebarMenu.Nav>
                    </SidebarMenu.Sub.Collapse>
                  </SidebarMenu.Sub>
                </SidebarMenu.Nav>
              </SidebarMenu.Sub.Collapse>
            </SidebarMenu.Sub>
          </SidebarMenu.Nav>
        </SidebarMenu.Body>
        <SidebarMenu.Footer></SidebarMenu.Footer>
      </SidebarMenu.Collapse>
    </SidebarMenu>
  );
}

export default Sidebar;
