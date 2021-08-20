import React, { Component } from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";

class LeftTopComponent extends Component {
    render() {
        return (
            <div class="container">
                <div
                    class="col"
                    style={{
                        background: "#5daae0",
                        borderRadius: "5px",
                        margin: "5% 0"
                    }}
                >
                    <div class="row" style={{ padding: "5% 0 0 40%" }}>
                        <MyScreen key={1} tech={"Left Top"} />
                    </div>
                    <div class="row" style={{ padding: "5% 0 10% 30%" }}>
                        <ButtonGroup
                            key={2}
                            side="leftTop"

                            technologies={["Button A", "Button B", "Button C"]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftTopComponent;
