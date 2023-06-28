"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function App() {
    const [firstname, setFirstname] = (0, react_1.useState)('');
    const [lastname, setLastname] = (0, react_1.useState)('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname, lastname }),
            });
            if (response.ok) {
                console.log('전송 성공');
            }
            else {
                console.error('데이터 전송 실패');
            }
        }
        catch (error) {
            console.error('전송 중 에러 발생.', error);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "Input"),
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("input", { placeholder: "\uC131\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", value: firstname, onChange: (e) => setFirstname(e.target.value) }),
            react_1.default.createElement("input", { placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", value: lastname, onChange: (e) => setLastname(e.target.value) }),
            react_1.default.createElement("button", { type: "submit", placeholder: "\uC804\uC1A1" }, "\uC804\uC1A1"))));
}
exports.default = App;
//# sourceMappingURL=App.js.map