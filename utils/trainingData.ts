export const trainingData = [
    {
        "text_input": "construct a dam",
        "output": {
            "total_duration_days": 40,
            "work_orders": [
                {
                    "id": "wo11",
                    "task": "Survey and Assess Site",
                    "estimated_cost": 7000,
                    "duration_days": 7,
                    "bill_of_materials": [
                        { "item": "Survey equipment", "price": 3000, "vendor": "SurveyTech Ltd." },
                        { "item": "Safety gear", "price": 1000, "vendor": "SafeWear Inc." }
                    ],
                    "stakeholders": {
                        "surveyors": 4,
                        "safety officer": 1
                    },
                    "child_work_orders": ["wo12", "wo13", "wo14"]
                },
                {
                    "id": "wo12",
                    "task": "Prepare Foundation",
                    "estimated_cost": 50000,
                    "duration_days": 20,
                    "bill_of_materials": [
                        { "item": "Concrete", "price": 25000, "vendor": "Concrete Masters" },
                        { "item": "Rebar", "price": 25000, "vendor": "Rebar Solutions" }
                    ],
                    "stakeholders": {
                        "civil engineer": 1,
                        "construction workers": 25
                    },
                    "child_work_orders": ["wo15"]
                },
                {
                    "id": "wo13",
                    "task": "Construct Spillway",
                    "estimated_cost": 60000,
                    "duration_days": 25,
                    "bill_of_materials": [
                        { "item": "Steel reinforcement", "price": 20000, "vendor": "SteelCo Supplies" },
                        { "item": "Concrete", "price": 40000, "vendor": "Concrete Masters" }
                    ],
                    "stakeholders": {
                        "structural engineer": 1,
                        "construction workers": 30
                    },
                    "child_work_orders": ["wo15"]
                },
                {
                    "id": "wo14",
                    "task": "Install Electrical Systems",
                    "estimated_cost": 25000,
                    "duration_days": 15,
                    "bill_of_materials": [
                        { "item": "Electrical wiring", "price": 15000, "vendor": "ElectroSupply Co." },
                        { "item": "Control systems", "price": 10000, "vendor": "ControlTech Ltd." }
                    ],
                    "stakeholders": {
                        "electricians": 8,
                        "engineers": 2
                    },
                    "child_work_orders": ["wo15"]
                },
                {
                    "id": "wo15",
                    "task": "Final Inspection and Handover",
                    "estimated_cost": 15000,
                    "duration_days": 10,
                    "bill_of_materials": [
                        { "item": "Inspection tools", "price": 5000, "vendor": "InspectTools Pro" }
                    ],
                    "stakeholders": {
                        "inspectors": 2,
                        "project manager": 1
                    },
                    "child_work_orders": []
                }
            ],
            "planning_jrc": "Hydraulic Engineering Consultant"
        }
    },
    {
        "text_input": "construct a stadium",
        "output": {
            "total_duration_days": 70,
            "work_orders": [
                {
                    "id": "wo16",
                    "task": "Design and Planning",
                    "estimated_cost": 50000,
                    "duration_days": 15,
                    "bill_of_materials": [
                        { "item": "Drafting software license", "price": 5000, "vendor": "DesignSoft Inc." },
                        { "item": "Survey equipment", "price": 3000, "vendor": "SurveyTech Ltd." }
                    ],
                    "stakeholders": {
                        "architects": 2,
                        "surveyors": 3
                    },
                    "child_work_orders": ["wo17", "wo18", "wo19"]
                },
                {
                    "id": "wo17",
                    "task": "Excavation and Foundation",
                    "estimated_cost": 100000,
                    "duration_days": 30,
                    "bill_of_materials": [
                        { "item": "Excavation machinery", "price": 60000, "vendor": "Excavators Inc." },
                        { "item": "Concrete", "price": 40000, "vendor": "Concrete Masters" }
                    ],
                    "stakeholders": {
                        "civil engineer": 1,
                        "construction workers": 30
                    },
                    "child_work_orders": ["wo20"]
                },
                {
                    "id": "wo18",
                    "task": "Erect Structural Frame",
                    "estimated_cost": 150000,
                    "duration_days": 40,
                    "bill_of_materials": [
                        { "item": "Steel beams", "price": 80000, "vendor": "SteelCo Supplies" },
                        { "item": "Bolts and fasteners", "price": 30000, "vendor": "BoltFactory Inc." },
                        { "item": "Scaffolding", "price": 40000, "vendor": "ScaffoldPro Ltd." }
                    ],
                    "stakeholders": {
                        "structural engineer": 1,
                        "construction workers": 40
                    },
                    "child_work_orders": ["wo20"]
                },
                {
                    "id": "wo19",
                    "task": "Install Utilities and Systems",
                    "estimated_cost": 80000,
                    "duration_days": 30,
                    "bill_of_materials": [
                        { "item": "HVAC systems", "price": 50000, "vendor": "AirPro Systems" },
                        { "item": "Lighting equipment", "price": 30000, "vendor": "BrightLights Co." }
                    ],
                    "stakeholders": {
                        "electricians": 10,
                        "technicians": 5
                    },
                    "child_work_orders": ["wo20"]
                },
                {
                    "id": "wo20",
                    "task": "Final Inspection and Handover",
                    "estimated_cost": 20000,
                    "duration_days": 10,
                    "bill_of_materials": [
                        { "item": "Inspection tools", "price": 5000, "vendor": "InspectTools Pro" }
                    ],
                    "stakeholders": {
                        "inspectors": 3,
                        "project manager": 1
                    },
                    "child_work_orders": []
                }
            ],
            "planning_jrc": "Sports Infrastructure Consultant"
        }
    }
];
