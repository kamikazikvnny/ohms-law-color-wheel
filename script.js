/* =========================================================
   OHM'S LAW & POWER COLOR WHEEL
   Interactive Electrical Math Training

   COLOR WHEEL EQUATIONS

   POWER
   E × I
   R × I²
   E² / R

   VOLTAGE
   R × I
   P / I
   √(P × R)

   RESISTANCE
   E / I
   E² / P
   P / I²

   CURRENT
   E / R
   P / E
   √(P / R)

========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Ohm's Law Color Wheel loaded.");


    /* =========================================================
       EQUATION DATA
    ========================================================= */

    const equations = {

        /* =====================================================
           POWER
        ===================================================== */

        "E × I": {

            title: "Power from Voltage and Current",

            description:
                "Calculate electrical power when voltage and current are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: ([voltage, current]) =>
                voltage * current,

            resultUnit: "W",

            field:
                "An electrician can use this relationship to determine the power used by a load when the circuit voltage and current are known.",

            why:
                "Electrical power is the rate at which electrical energy is being used or transferred.",

            what:
                "For example, a 120 V load drawing 5 A uses 600 W of electrical power."
        },


        "R × I²": {

            title: "Power from Resistance and Current",

            description:
                "Calculate electrical power when resistance and current are known.",

            inputs: [
                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: ([resistance, current]) =>
                resistance * (current ** 2),

            resultUnit: "W",

            field:
                "An electrician can use this relationship to determine the power associated with a resistive load when current and resistance are known.",

            why:
                "Because current is squared, increasing current can have a significant effect on power.",

            what:
                "For example, 5 A flowing through 20 Ω produces 500 W of power."
        },


        "E² / R": {

            title: "Power from Voltage and Resistance",

            description:
                "Calculate electrical power when voltage and resistance are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: ([voltage, resistance]) =>
                (voltage ** 2) / resistance,

            resultUnit: "W",

            field:
                "An electrician can use this relationship when voltage and the resistance of a load are known.",

            why:
                "Squaring the voltage and dividing by resistance provides another form of the power relationship.",

            what:
                "For example, a 120 V load with 20 Ω of resistance uses 720 W."
        },


        /* =====================================================
           VOLTAGE
        ===================================================== */

        "R × I": {

            title: "Voltage from Resistance and Current",

            description:
                "Calculate voltage when resistance and current are known.",

            inputs: [
                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: ([resistance, current]) =>
                resistance * current,

            resultUnit: "V",

            field:
                "An electrician can use this form of Ohm's Law to determine the voltage across a load when resistance and current are known.",

            why:
                "Voltage is related to both the resistance of the load and the current flowing through it.",

            what:
                "For example, 20 Ω × 5 A = 100 V."
        },


        "P / I": {

            title: "Voltage from Power and Current",

            description:
                "Calculate voltage when power and current are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 600
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0.1,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: ([power, current]) =>
                power / current,

            resultUnit: "V",

            field:
                "An electrician can use power and current information to determine the voltage associated with a load.",

            why:
                "This relationship comes from rearranging the power formula P = E × I.",

            what:
                "For example, a 600 W load drawing 5 A operates at 120 V."
        },


        "√(P × R)": {

            title: "Voltage from Power and Resistance",

            description:
                "Calculate voltage when power and resistance are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 720
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: ([power, resistance]) =>
                Math.sqrt(power * resistance),

            resultUnit: "V",

            field:
                "An electrician can determine voltage when the power and resistance of a load are known.",

            why:
                "This is derived by combining Ohm's Law with the power relationship.",

            what:
                "For example, √(720 W × 20 Ω) = 120 V."
        },  


        /* =====================================================
           CURRENT
        ===================================================== */

        "E / R": {

            title: "Current from Voltage and Resistance",

            description:
                "Calculate current when voltage and resistance are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: ([voltage, resistance]) =>
                voltage / resistance,

            resultUnit: "A",

            what:
                "This equation calculates current by dividing voltage by resistance.",

            why:
                "It demonstrates the basic relationship between voltage, current, and resistance.",

            field:
                "An electrician can use this relationship to determine current when voltage and resistance are known."
        },


        "P / E": {

            title: "Current from Power and Voltage",

            description:
                "Calculate current when power and voltage are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 600
                },

                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 1,
                    max: 240,
                    step: 1,
                    value: 120
                }
            ],

            calculate: ([power, voltage]) =>
                power / voltage,

            resultUnit: "A",

            field:
                "An electrician can use known power and voltage values to determine the current required by a load.",

            why:
                "This relationship comes from rearranging P = E × I to solve for current.",

            what:
                "For example, a 600 W load operating at 120 V draws 5 A."
        },


        "√(P / R)": {

            title: "Current from Power and Resistance",

            description:
                "Calculate current when power and resistance are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 500
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: ([power, resistance]) =>
                Math.sqrt(power / resistance),

            resultUnit: "A",

            field:
                "An electrician can determine current when the power and resistance of a load are known.",

            why:
                "This relationship is derived from the power equation P = I²R.",

            what:
                "For example, √(500 W ÷ 20 Ω) = 5 A."
        },
    

        /* =====================================================
           RESISTANCE
        ===================================================== */

        "E / I": {

            title: "Resistance from Voltage and Current",

            description:
                "Calculate resistance when voltage and current are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0.1,
                    max: 50,
                    step: 0.1,
                    value: 6
                }
            ],

            calculate: ([voltage, current]) =>
                voltage / current,

            resultUnit: "Ω",

            field:
                "An electrician can use measured voltage and current to determine the effective resistance of a load.",

            why:
                "Ohm's Law can be rearranged to solve for resistance by dividing voltage by current.",

            what:
                "For example, 120 V ÷ 6 A = 20 Ω."
        },


        "E² / P": {

            title: "Resistance from Voltage and Power",

            description:
                "Calculate resistance when voltage and power are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 1,
                    max: 5000,
                    step: 10,
                    value: 720
                }
            ],

            calculate: ([voltage, power]) =>
                (voltage ** 2) / power,

            resultUnit: "Ω",

            field:
                "An electrician can determine resistance from known voltage and power values.",

            why:
                "This relationship is another form of the electrical power equations.",

            what:
                "For example, 120² ÷ 720 = 20 Ω."
        },


        "P / I²": {

            title: "Resistance from Power and Current",

            description:
                "Calculate resistance when power and current are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 500
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0.1,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: ([power, current]) =>
                power / (current ** 2),

            resultUnit: "Ω",

            field:
                "An electrician can determine the resistance of a load when its power and current are known.",

            why:
                "The formula comes directly from rearranging P = I²R to solve for resistance.",

            what:
                "For example, 500 W ÷ 5² = 20 Ω."
        }

    };


    /* =========================================================
       PRACTICE PROBLEMS
    ========================================================= */

    const practiceProblems = {

        "E × I":
            "A 120 V load draws 8 A. What is its power?",

        "R × I²":
            "A 20 Ω resistance carries 5 A. How much power is produced?",

        "E² / R":
            "A 120 V load has 20 Ω of resistance. How much power does it use?",

        "R × I":
            "A circuit has 20 Ω of resistance and 5 A of current. What voltage is present?",

        "P / I":
            "A load uses 600 W and draws 5 A. What voltage is supplying it?",

        "√(P × R)":
            "A load uses 720 W and has 20 Ω of resistance. What voltage is required?",

        "E / R":
            "A 120 V circuit has a 20 Ω load. What current should flow?",

        "P / E":
            "A 120 V load uses 600 W. Approximately how much current does it draw?",

        "√(P / R)":
            "A 500 W load has 20 Ω of resistance. What current does it draw?",

        "E / I":
            "A load has 120 V across it and draws 6 A. What is its resistance?",

        "E² / P":
            "A 120 V load uses 720 W. What is its resistance?",

        "P / I²":
            "A load uses 500 W while drawing 5 A. What is its resistance?"
    };


    /* =========================================================
       DOM ELEMENTS
    ========================================================= */

    const wheelWrapper =
        document.querySelector("#wheelWrapper");

    const wheelOverlay =
        document.querySelector(".wheel-hotspots");

    const hotspots =
        document.querySelectorAll(".wheel-hotspot");

    const selectedEquation =
        document.querySelector("#selectedEquation");

    const equationDescription =
        document.querySelector("#equationDescription");

    const calculatorInputs =
        document.querySelector("#calculatorInputs");

    const resultValue =
        document.querySelector("#resultValue");

    const fieldUse =
        document.querySelector("#fieldUse");

    const fieldExample =
        document.querySelector("#fieldExample");

    const fieldUseExample =
        document.querySelector("#fieldUseExample");

    const practiceButton =
        document.querySelector("#practiceButton");

    const practiceBox =
        document.querySelector("#practiceBox");


    /* =========================================================
       CURRENT EQUATION
    ========================================================= */

    let currentEquation = null;


    /* =========================================================
       NUMBER FORMATTER
    ========================================================= */

    function formatNumber(value) {

        if (!Number.isFinite(value)) {
            return "—";
        }

        if (Math.abs(value) >= 1000) {

            return value.toLocaleString("en-US", {
                maximumFractionDigits: 2
            });

        }

        return Number(value.toFixed(2)).toString();
    }


    /* =========================================================
       CLEAR WHEEL SELECTION
    ========================================================= */

    function clearWheelSelection() {

        hotspots.forEach(hotspot => {

            hotspot.classList.remove("selected");
            hotspot.classList.remove("hovered");

        });

        if (wheelOverlay) {
            wheelOverlay.classList.remove("has-selection");
        }

        if (wheelWrapper) {
            wheelWrapper.classList.remove("has-selection");
        }
    }


    /* =========================================================
       SET WHEEL SELECTION
    ========================================================= */

    function setWheelSelection(selectedHotspot) {

        hotspots.forEach(hotspot => {

            hotspot.classList.toggle(
                "selected",
                hotspot === selectedHotspot
            );

        });

        if (wheelOverlay) {
            wheelOverlay.classList.add("has-selection");
        }

        if (wheelWrapper) {
            wheelWrapper.classList.add("has-selection");
        }
    }


    /* =========================================================
       LOAD EQUATION
    ========================================================= */

    function loadEquation(equationKey, selectedHotspot = null) {

        const equation = equations[equationKey];

        if (!equation) {

            console.warn(
                `Equation "${equationKey}" was not found.`
            );

            return;
        }


        currentEquation = equationKey;


        /* -----------------------------------------------------
           WHEEL SELECTION
        ----------------------------------------------------- */

        if (selectedHotspot) {

            setWheelSelection(selectedHotspot);

        } else {

            hotspots.forEach(hotspot => {

                if (hotspot.dataset.equation === equationKey) {

                    setWheelSelection(hotspot);

                }

            });

        }


        /* -----------------------------------------------------
           HEADER
        ----------------------------------------------------- */

        if (selectedEquation) {

            selectedEquation.textContent =
                equationKey;

        }


        if (equationDescription) {

            equationDescription.textContent =
                equation.description;

        }


        /* -----------------------------------------------------
           FIELD APPLICATION
        ----------------------------------------------------- */

        if (fieldUse) {

            fieldUse.textContent =
                equation.field;

        }

        if (fieldExample) {

            fieldExample.textContent =
                equation.why;

        }

        if (fieldUseExample) {

            fieldUseExample.textContent =
                equation.what;

        }


        /* -----------------------------------------------------
           CLEAR OLD INPUTS
        ----------------------------------------------------- */

        if (!calculatorInputs) {
            return;
        }

        calculatorInputs.innerHTML = "";


        /* -----------------------------------------------------
           CREATE INPUTS
        ----------------------------------------------------- */

        equation.inputs.forEach((input, index) => {

            const group =
                document.createElement("div");

            group.className =
                "input-group";


            const label =
                document.createElement("label");

            label.innerHTML = `
                <span>
                    ${input.name}
                    <strong>${input.symbol}</strong>
                </span>

                <span class="live-value">
                    <span id="value-${index}">
                        ${formatNumber(input.value)}
                    </span>
                    ${input.unit}
                </span>
            `;


            const slider =
                document.createElement("input");

            slider.type =
                "range";

            slider.min =
                input.min;

            slider.max =
                input.max;

            slider.step =
                input.step;

            slider.value =
                input.value;

            slider.className =
                "value-slider";

            slider.dataset.index =
                index;

            slider.setAttribute(
                "aria-label",
                `${input.name} ${input.symbol}`
            );


            /* -------------------------------------------------
               STANDARD INPUT
            ------------------------------------------------- */

            slider.addEventListener(
                "input",
                updateCalculator
            );


            /* -------------------------------------------------
               CUSTOM POINTER DRAG
            ------------------------------------------------- */

            let dragStartX = 0;
            let dragStartValue = 0;
            let isDragging = false;


            slider.addEventListener(
                "pointerdown",
                (event) => {

                    dragStartX =
                        event.clientX;

                    dragStartValue =
                        Number(slider.value);

                    isDragging = true;

                    try {

                        slider.setPointerCapture(
                            event.pointerId
                        );

                    } catch (error) {

                        /* Pointer capture may not be
                           available in every browser. */

                    }

                }
            );


            slider.addEventListener(
                "pointermove",
                (event) => {

                    if (!isDragging) {
                        return;
                    }


                    const distance =
                        event.clientX - dragStartX;

                    const absDistance =
                        Math.abs(distance);


                    let sensitivity;


                    if (absDistance <= 50) {

                        sensitivity = 1;

                    } else if (absDistance <= 100) {

                        sensitivity = 0.5;

                    } else if (absDistance <= 200) {

                        sensitivity = 0.25;

                    } else {

                        sensitivity = 0.1;

                    }


                    const valueChange =
                        (distance / 10) * sensitivity;


                    let newValue =
                        dragStartValue + valueChange;


                    const min =
                        Number(slider.min);

                    const max =
                        Number(slider.max);

                    const step =
                        Number(slider.step);


                    newValue =
                        Math.max(
                            min,
                            Math.min(max, newValue)
                        );


                    newValue =
                        Math.round(
                            newValue / step
                        ) * step;


                    slider.value =
                        newValue;


                    updateCalculator();

                }
            );


            slider.addEventListener(
                "pointerup",
                (event) => {

                    isDragging = false;

                    try {

                        slider.releasePointerCapture(
                            event.pointerId
                        );

                    } catch (error) {

                        /* Ignore pointer capture errors. */

                    }

                }
            );


            slider.addEventListener(
                "pointercancel",
                () => {

                    isDragging = false;

                }
            );


            group.appendChild(label);
            group.appendChild(slider);

            calculatorInputs.appendChild(group);

        });


        /* -----------------------------------------------------
           INITIAL CALCULATION
        ----------------------------------------------------- */

        updateCalculator();


        /* -----------------------------------------------------
           RESET PRACTICE MESSAGE
        ----------------------------------------------------- */

        if (practiceBox) {

            practiceBox.textContent =
                "Click PRACTICE THIS EQUATION to generate a problem.";

        }

    }


    /* =========================================================
       UPDATE CALCULATOR
    ========================================================= */

    function updateCalculator() {

        if (!currentEquation) {
            return;
        }


        const equation =
            equations[currentEquation];


        if (!calculatorInputs) {
            return;
        }


        const sliders =
            calculatorInputs.querySelectorAll(
                ".value-slider"
            );


        const values =
            Array.from(sliders).map(
                slider =>
                    Number(slider.value)
            );


        /* -----------------------------------------------------
           UPDATE LIVE VALUES
        ----------------------------------------------------- */

        sliders.forEach((slider, index) => {

            const display =
                document.querySelector(
                    `#value-${index}`
                );


            if (display) {

                display.textContent =
                    formatNumber(values[index]);

            }

        });


        /* -----------------------------------------------------
           CALCULATE
        ----------------------------------------------------- */

        let result;


        try {

            result =
                equation.calculate(values);

        } catch (error) {

            console.error(
                "Calculation error:",
                error
            );

            result =
                NaN;
        }


        /* -----------------------------------------------------
           DISPLAY RESULT
        ----------------------------------------------------- */

        if (
            Number.isFinite(result) &&
            result >= 0
        ) {

            resultValue.textContent =
                `${formatNumber(result)} ${equation.resultUnit}`;

        } else {

            resultValue.textContent =
                "—";

        }

    }


    /* =========================================================
       WHEEL EVENTS
    ========================================================= */

    hotspots.forEach(hotspot => {


        /* -----------------------------------------------------
           CLICK
        ----------------------------------------------------- */

        hotspot.addEventListener(
            "click",
            (event) => {

                /*
                   Prevent the click from reaching the
                   document-level outside-click handler.
                */

                event.stopPropagation();


                const equation =
                    hotspot.dataset.equation;


                if (!equations[equation]) {

                    console.warn(
                        `No calculator exists for "${equation}".`
                    );

                    return;
                }


                loadEquation(
                    equation,
                    hotspot
                );

            }
        );


        /* -----------------------------------------------------
           HOVER
        ----------------------------------------------------- */

        hotspot.addEventListener(
            "mouseenter",
            () => {

                hotspot.classList.add(
                    "hovered"
                );

            }
        );


        hotspot.addEventListener(
            "mouseleave",
            () => {

                hotspot.classList.remove(
                    "hovered"
                );

            }
        );

    });


    /* =========================================================
       PRACTICE BUTTON
    ========================================================= */

    if (practiceButton) {

        practiceButton.addEventListener(
            "click",
            () => {

                if (!currentEquation) {

                    practiceBox.textContent =
                        "Select an equation on the wheel first.";

                    return;
                }


                const problem =
                    practiceProblems[currentEquation];


                if (!problem) {

                    practiceBox.textContent =
                        "No practice problem is available for this equation.";

                    return;
                }


                practiceBox.innerHTML = `
                    <strong>
                        YOUR PRACTICE PROBLEM
                    </strong>

                    <p>
                        ${problem}
                    </p>

                    <span>
                        Use the calculator above to work it out.
                    </span>
                `;

            }
        );

    }


    /* =========================================================
       CLICK OUTSIDE WHEEL
    ========================================================= */

    document.addEventListener(
        "click",
        (event) => {

            /*
               Do not clear the selection when clicking
               inside the wheel or calculator area.
            */

            if (
                event.target.closest(
                    "#wheelWrapper"
                )
            ) {

                return;

            }


            /*
               We intentionally leave the equation selected
               when the user works with the calculator,
               practice button, etc.

               Therefore no selection is cleared here.
            */

        }
    );


    /* =========================================================
       VALIDATE WHEEL AGAINST EQUATION DATA
    ========================================================= */

    const wheelEquationNames =
        Array.from(hotspots).map(
            hotspot =>
                hotspot.dataset.equation
        );


    wheelEquationNames.forEach(
        equation => {

            if (!equations[equation]) {

                console.warn(
                    `Wheel hotspot "${equation}" has no matching calculator.`
                );

            }

        }
    );


    Object.keys(equations).forEach(
        equation => {

            if (
                !wheelEquationNames.includes(
                    equation
                )
            ) {

                console.warn(
                    `Calculator equation "${equation}" has no matching wheel hotspot.`
                );

            }

        }
    );


    /* =========================================================
       INITIAL STATE
    ========================================================= */

    if (selectedEquation) {

        selectedEquation.textContent =
            "Select an equation above";

    }


    if (equationDescription) {

        equationDescription.textContent =
            "Click one of the equations on the color wheel to begin.";

    }


    console.log(
        `Loaded ${Object.keys(equations).length} equations.`
    );

});
