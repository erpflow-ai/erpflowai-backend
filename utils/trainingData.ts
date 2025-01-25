export const trainingData = [
    {
        "text_input": "construct a bridge",
        "output": {
            "work_orders": [
                { "task": "Survey Site", "estimated_cost": 5000, "duration_days": 5 },
                { "task": "Prepare Materials", "estimated_cost": 20000, "duration_days": 7 },
                { "task": "Foundation Work", "estimated_cost": 50000, "duration_days": 15 },
                { "task": "Erect Support Beams", "estimated_cost": 70000, "duration_days": 20 },
                { "task": "Install Decking & Cables", "estimated_cost": 30000, "duration_days": 10 }
            ],
            "planning_jrc": "Civil Engineering Consultant",
            "stakeholders": {
                "architect": 1,
                "structural engineer": 1,
                "construction workers": 50,
                "safety officer": 1,
                "material supplier": 1
            },
            "bill_of_materials": [
                "Steel beams", "Concrete", "Cables", "Decking materials", "Rebar", "Survey equipment", "Safety gear"
            ]
        }
    },
    {
        "text_input": "construct a skyscraper",
        "output": {
            "work_orders": [
                { "task": "Excavate Foundation", "estimated_cost": 100000, "duration_days": 30 },
                { "task": "Build Core", "estimated_cost": 200000, "duration_days": 40 },
                { "task": "Install Steel Frame", "estimated_cost": 150000, "duration_days": 35 },
                { "task": "Install Facade", "estimated_cost": 50000, "duration_days": 25 },
                { "task": "Interior Work", "estimated_cost": 80000, "duration_days": 20 }
            ],
            "planning_jrc": "Urban Development Authority",
            "stakeholders": {
                "architect": 1,
                "civil engineer": 1,
                "construction workers": 100,
                "electricians": 10,
                "plumbers": 5
            },
            "bill_of_materials": [
                "Steel frames", "Glass panels", "Concrete", "Electrical wiring", "Pipes and plumbing fixtures", "Elevators"
            ]
        }
    },
    {
        "text_input": "construct a hospital",
        "output": {
            "work_orders": [
                { "task": "Prepare Site", "estimated_cost": 20000, "duration_days": 10 },
                { "task": "Build Emergency Ward", "estimated_cost": 60000, "duration_days": 20 },
                { "task": "Build Outpatient Wing", "estimated_cost": 80000, "duration_days": 30 },
                { "task": "Install Utilities", "estimated_cost": 50000, "duration_days": 15 },
                { "task": "Conduct Safety Inspection", "estimated_cost": 10000, "duration_days": 5 }
            ],
            "planning_jrc": "Health Infrastructure Board",
            "stakeholders": {
                "architect": 1,
                "civil engineer": 1,
                "construction workers": 75,
                "electricians": 10,
                "medical equipment suppliers": 2
            },
            "bill_of_materials": [
                "Concrete", "Steel reinforcement", "Electrical wiring", "Plumbing materials", "Medical equipment", "HVAC systems"
            ]
        }
    },
    {
        "text_input": "construct a wind farm",
        "output": {
            "work_orders": [
                { "task": "Feasibility Study", "estimated_cost": 15000, "duration_days": 20 },
                { "task": "Obtain Permits", "estimated_cost": 10000, "duration_days": 30 },
                { "task": "Turbine Installation", "estimated_cost": 300000, "duration_days": 40 },
                { "task": "Connect to Power Grid", "estimated_cost": 50000, "duration_days": 15 },
                { "task": "Conduct Safety Tests", "estimated_cost": 20000, "duration_days": 10 }
            ],
            "planning_jrc": "Energy Development Agency",
            "stakeholders": {
                "project manager": 1,
                "energy consultant": 1,
                "technicians": 20,
                "construction workers": 50,
                "safety inspector": 1
            },
            "bill_of_materials": [
                "Wind turbines", "Concrete", "Cabling", "Transformers", "Control systems", "Safety gear"
            ]
        }
    },
    {
        "text_input": "construct an airport",
        "output": {
            "work_orders": [
                { "task": "Land Preparation", "estimated_cost": 50000, "duration_days": 15 },
                { "task": "Runway Construction", "estimated_cost": 200000, "duration_days": 40 },
                { "task": "Construct Terminal", "estimated_cost": 300000, "duration_days": 60 },
                { "task": "Install Air Traffic Systems", "estimated_cost": 100000, "duration_days": 25 },
                { "task": "Set Up Passenger Facilities", "estimated_cost": 50000, "duration_days": 20 }
            ],
            "planning_jrc": "Civil Aviation Authority",
            "stakeholders": {
                "architect": 2,
                "civil engineer": 1,
                "construction workers": 200,
                "electricians": 20,
                "aviation system consultants": 5
            },
            "bill_of_materials": [
                "Concrete", "Runway lighting systems", "Steel", "Glass panels", "Air traffic control systems", "Furniture"
            ]
        }
    },
    {
        "text_input": "construct a stadium",
        "output": {
            "work_orders": [
                { "task": "Survey Land", "estimated_cost": 10000, "duration_days": 7 },
                { "task": "Prepare Foundation", "estimated_cost": 50000, "duration_days": 20 },
                { "task": "Build Seating Areas", "estimated_cost": 120000, "duration_days": 40 },
                { "task": "Construct Playing Field", "estimated_cost": 80000, "duration_days": 30 },
                { "task": "Install Lighting Systems", "estimated_cost": 40000, "duration_days": 15 }
            ],
            "planning_jrc": "Sports Development Board",
            "stakeholders": {
                "architect": 1,
                "civil engineer": 1,
                "construction workers": 120,
                "electricians": 15,
                "sports equipment suppliers": 2
            },
            "bill_of_materials": [
                "Concrete", "Steel", "Seating materials", "Lighting systems", "Turf", "Scoreboard systems"
            ]
        }
    },
    {
        "text_input": "construct a dam",
        "output": {
            "work_orders": [
                { "task": "Survey Riverbed", "estimated_cost": 30000, "duration_days": 15 },
                { "task": "Excavate Site", "estimated_cost": 100000, "duration_days": 30 },
                { "task": "Lay Foundation", "estimated_cost": 200000, "duration_days": 50 },
                { "task": "Build Concrete Walls", "estimated_cost": 400000, "duration_days": 60 },
                { "task": "Install Spillways", "estimated_cost": 80000, "duration_days": 20 }
            ],
            "planning_jrc": "Water Resources Department",
            "stakeholders": {
                "hydrologist": 1,
                "civil engineer": 1,
                "construction workers": 150,
                "mechanical engineers": 5,
                "safety inspector": 1
            },
            "bill_of_materials": [
                "Concrete", "Steel reinforcement", "Spillway gates", "Survey equipment", "Excavation machinery"
            ]
        }
    },
    {
        "text_input": "construct a road",
        "output": {
            "work_orders": [
                { "task": "Survey Route", "estimated_cost": 5000, "duration_days": 5 },
                { "task": "Clear Land", "estimated_cost": 15000, "duration_days": 10 },
                { "task": "Prepare Base", "estimated_cost": 25000, "duration_days": 15 },
                { "task": "Lay Asphalt", "estimated_cost": 60000, "duration_days": 20 },
                { "task": "Paint Road Markings", "estimated_cost": 10000, "duration_days": 7 }
            ],
            "planning_jrc": "Public Works Department",
            "stakeholders": {
                "civil engineer": 1,
                "surveyors": 3,
                "construction workers": 50,
                "paving specialists": 5,
                "traffic planners": 1
            },
            "bill_of_materials": [
                "Asphalt", "Concrete", "Road signs", "Paint", "Survey equipment"
            ]
        }
    },
    {
        "text_input": "construct a school",
        "output": {
            "work_orders": [
                { "task": "Survey Land", "estimated_cost": 5000, "duration_days": 5 },
                { "task": "Lay Foundation", "estimated_cost": 30000, "duration_days": 15 },
                { "task": "Build Classrooms", "estimated_cost": 80000, "duration_days": 40 },
                { "task": "Install Electrical Systems", "estimated_cost": 20000, "duration_days": 10 },
                { "task": "Furnish Classrooms", "estimated_cost": 15000, "duration_days": 10 }
            ],
            "planning_jrc": "Education Board",
            "stakeholders": {
                "architect": 1,
                "civil engineer": 1,
                "construction workers": 40,
                "electricians": 5,
                "furniture suppliers": 2
            },
            "bill_of_materials": [
                "Concrete", "Bricks", "Electrical wiring", "Desks and chairs", "Blackboards"
            ]
        }
    },
    {
        "text_input": "construct a power plant",
        "output": {
            "work_orders": [
                { "task": "Conduct Feasibility Study", "estimated_cost": 25000, "duration_days": 20 },
                { "task": "Prepare Land", "estimated_cost": 50000, "duration_days": 30 },
                { "task": "Install Machinery", "estimated_cost": 300000, "duration_days": 60 },
                { "task": "Set Up Control Systems", "estimated_cost": 50000, "duration_days": 20 },
                { "task": "Connect to Power Grid", "estimated_cost": 40000, "duration_days": 15 }
            ],
            "planning_jrc": "Energy Development Authority",
            "stakeholders": {
                "project manager": 1,
                "energy consultant": 1,
                "technicians": 30,
                "construction workers": 100,
                "safety officer": 1
            },
            "bill_of_materials": [
                "Turbines", "Transformers", "Concrete", "Steel", "Cabling"
            ]
        }
    }
]
