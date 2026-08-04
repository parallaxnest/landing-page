import {
  AssetNode,
  PipelineStage,
  CapabilityCard,
  IndustrySolution,
  PricingPlan,
  FAQItem,
  IntegrationNode,
  ArchitectureLayer,
  TestimonialItem
} from '../types';

export const HERO_ASSETS: AssetNode[] = [
  {
    id: 'ast-101',
    name: 'HVAC Air Handler B-4',
    type: 'hvac',
    zone: 'Zone B - Mezzanine',
    x: 28,
    y: 32,
    status: 'optimal',
    health: 98.4,
    temp: '21.4 °C',
    load: '64%',
    efficiency: '99.1%',
    aiInsight: 'Optimal airflow distribution. Zero maintenance predicted for 120 days.'
  },
  {
    id: 'ast-102',
    name: 'High-Speed Conveyor Line 2',
    type: 'conveyor',
    zone: 'Zone B - Logistics',
    x: 52,
    y: 48,
    status: 'warning',
    health: 86.2,
    temp: '38.1 °C',
    load: '88%',
    efficiency: '91.4%',
    aiInsight: 'Vibration frequency anomaly +18%. Recommended belt re-tensioning.'
  },
  {
    id: 'ast-103',
    name: 'Robotic Pick & Pack Node Alpha',
    type: 'robot',
    zone: 'Zone A - Precision Assembly',
    x: 74,
    y: 36,
    status: 'optimal',
    health: 99.8,
    temp: '26.8 °C',
    load: '42%',
    efficiency: '99.8%',
    aiInsight: 'Synchronized cycle rate optimal. Energy footprint down 12%.'
  },
  {
    id: 'ast-104',
    name: 'Edge Server Rack E-09',
    type: 'server',
    zone: 'Data Hub - North Wing',
    x: 38,
    y: 68,
    status: 'optimal',
    health: 97.6,
    temp: '19.2 °C',
    load: '55%',
    efficiency: '98.9%',
    aiInsight: 'Latency steady at 1.8ms. Ingestion queue operating at peak throughput.'
  },
  {
    id: 'ast-105',
    name: 'Cryogenic Chiller Pump 3',
    type: 'pipeline',
    zone: 'Sub-Level Utility Room',
    x: 65,
    y: 75,
    status: 'critical',
    health: 72.1,
    temp: '44.5 °C',
    load: '94%',
    efficiency: '81.2%',
    aiInsight: 'Thermal dissipation spike detected. Immediate valve bypass recommended.'
  }
];

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    step: '01',
    title: 'PHYSICAL ENVIRONMENT',
    description: 'Capture spatial layout, machinery, telemetry, geometry, and real-time environmental attributes.',
    techDetails: 'Supports LiDAR clouds, BIM/CAD models, drone surveys, and spatial coordinates.',
    metrics: 'Sub-millimeter spatial fidelity',
    activeColor: 'teal'
  },
  {
    step: '02',
    title: 'DATA INGESTION',
    description: 'Stream multi-source telemetry from IoT sensors, SCADA, ERP, and edge devices in real time.',
    techDetails: 'MQTT, OPC-UA, Modbus, REST, and gRPC endpoints at 10,000 events/sec.',
    metrics: '<15ms edge ingestion latency',
    activeColor: 'teal'
  },
  {
    step: '03',
    title: 'SPATIAL PROCESSING',
    description: 'Bind sensor streams to 3D spatial coordinates, establishing geometric context and topological bonds.',
    techDetails: '3D Spatial Graph Engine mapping topological proximity & physical dependencies.',
    metrics: '100% spatial binding accuracy',
    activeColor: 'lavender'
  },
  {
    step: '04',
    title: 'DIGITAL TWIN',
    description: 'Construct a synchronized 3D dynamic digital twin that mirror physical operational states.',
    techDetails: 'WebGL/WebGPU ray-cast canvas engine with live state synchronization.',
    metrics: '60 FPS live rendering',
    activeColor: 'teal'
  },
  {
    step: '05',
    title: 'AI ANALYSIS',
    description: 'Evaluate spatial relationships, identify anomalies, and uncover cross-system operational friction.',
    techDetails: 'Spatial Transformer Models & Graph Neural Networks trained on spatial causality.',
    metrics: '99.4% anomaly precision',
    activeColor: 'lavender'
  },
  {
    step: '06',
    title: 'SIMULATION',
    description: 'Run predictive physics-based scenarios, test capacity changes, and model risk without live disruption.',
    techDetails: 'Multi-variable Monte Carlo and physics discrete event simulation engine.',
    metrics: '1,000+ parallel simulations/sec',
    activeColor: 'lavender'
  },
  {
    step: '07',
    title: 'OPERATIONAL INSIGHTS',
    description: 'Deliver actionable spatial directives, automated SCADA feedback, and predictive maintenance alerts.',
    techDetails: 'Closed-loop automation APIs, Jira/ServiceNow tickets, and SCADA control commands.',
    metrics: '38% operational cost reduction',
    activeColor: 'coral'
  }
];

export const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    id: 'spatial-engine',
    title: 'Spatial Intelligence Engine',
    subtitle: 'Geometric Causality & Context',
    description: 'Understand the spatial relationships behind operational data. Parallax Nest converts raw sensor data into contextual physical graphs, showing how physical proximity impacts efficiency and asset wear.',
    color: 'teal',
    tags: ['3D Graph Engine', 'Proximity Dynamics', 'Spatial Coordinates'],
    features: [
      'Automatic spatial topology mapping from CAD/LiDAR',
      'Real-time physical proximity effect calculation',
      'Cascading failure pathway prediction',
      'Multi-floor spatial mesh navigation'
    ],
    metricLabel: 'Spatial Topology Resolution',
    metricValue: '0.1 mm'
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin Platform',
    subtitle: 'Dynamic 3D Environment Mirroring',
    description: 'Create intelligent digital representations of physical environments. Render complex industrial facilities, logistics hubs, and smart buildings with sub-second state synchronization.',
    color: 'lavender',
    tags: ['BIM / CAD Native', 'Live Telemetry Binding', 'WebGPU Rendering'],
    features: [
      'Native BIM/IFC/STEP 3D model import pipeline',
      'Sub-second live SCADA/IoT mesh data binding',
      'Multi-layer views (Thermal, Flow, Stress, IoT)',
      'Cross-platform browser & XR spatial visualization'
    ],
    metricLabel: 'Sync Latency',
    metricValue: '< 18 ms'
  },
  {
    id: 'simulation-framework',
    title: 'Simulation Framework',
    subtitle: 'Predictive Scenario Testing',
    description: 'Test possible scenarios before changing the real world. Model throughput bottlenecks, equipment additions, thermal loads, and emergency evacuations safely in the digital domain.',
    color: 'coral',
    tags: ['Physics Engine', 'What-If Scenarios', 'Discrete Event Model'],
    features: [
      'Multi-variable capacity expansion modeling',
      'Thermal dynamics and fluid flow simulation',
      'Robotic routing optimization under stress',
      'Financial ROI prediction per scenario'
    ],
    metricLabel: 'Scenario Accuracy',
    metricValue: '97.8%'
  },
  {
    id: 'ai-analytics',
    title: 'AI Environment Analytics',
    subtitle: 'Context-Aware Pattern Recognition',
    description: 'Detect patterns, anomalies, and opportunities through intelligent analysis. Spatial AI correlates temperature spikes with physical airflow obstructions, preventing unplanned downtime.',
    color: 'teal-lavender',
    tags: ['Graph Neural Nets', 'Root-Cause Analysis', 'Automated Alerts'],
    features: [
      'Spatial causality correlation algorithms',
      'Predictive maintenance scheduling (up to 90 days out)',
      'Energy consumption hotspot detection',
      'Automated operational anomaly classification'
    ],
    metricLabel: 'Unplanned Downtime Reduced',
    metricValue: '42%'
  },
  {
    id: 'operations-center',
    title: 'Spatial Operations Center',
    subtitle: 'Unified Enterprise Command System',
    description: 'Monitor your entire operational environment from one intelligent command center. Integrate live cameras, sensor feeds, AI insights, and worker locations into an intuitive 3D spatial dashboard.',
    color: 'teal',
    tags: ['Unified Command', 'Role-Based Dashboards', 'Closed-Loop Control'],
    features: [
      'Unified command dashboard across global sites',
      'Custom alert thresholds and automated dispatch',
      'Historical timeline rewind & replay engine',
      'Enterprise SSO & SCIM access governance'
    ],
    metricLabel: 'Incident Response Speed',
    metricValue: '3.4x Faster'
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'mfg',
    title: 'Manufacturing',
    subtitle: 'Factory Digital Twins & Machine Intelligence',
    description: 'Optimize assembly line throughput, balance robotic arm loads, and eliminate bottlenecking using real-time spatial factory twins.',
    metric: '28%',
    metricLabel: 'OEE Improvement',
    features: [
      'Robotic arm kinematics & cycle sync',
      'Conveyor friction & heat monitoring',
      'Part tracking through 3D zone meshes'
    ],
    iconUrl: '/Parallex Graphics/industry applications.svg',
    badge: 'SMART FACTORY READY'
  },
  {
    id: 'fac',
    title: 'Facilities & Real Estate',
    subtitle: 'Building, Infrastructure & Asset Intelligence',
    description: 'Transform commercial towers, airports, and campuses into energy-efficient, climate-controlled, self-optimizing physical environments.',
    metric: '34%',
    metricLabel: 'Energy Savings',
    features: [
      'HVAC thermal spatial heatmapping',
      'Occupancy & foot-traffic flow analysis',
      'Predictive elevator & power grid maintenance'
    ],
    iconUrl: '/Parallex Graphics/industry applications (2).svg',
    badge: 'BIM COMPATIBLE'
  },
  {
    id: 'infra',
    title: 'Smart Infrastructure',
    subtitle: 'Connected Environments & Operational Visibility',
    description: 'Gain global spatial control over utility grids, water distribution pipelines, telecom towers, and transportation corridors.',
    metric: '99.9%',
    metricLabel: 'Grid Reliability',
    features: [
      'Geospatial asset mapping & GIS overlay',
      'Pressure & flow leakage detection',
      'Remote drone survey data integration'
    ],
    iconUrl: '/Parallex Graphics/industry applications (3).svg',
    badge: 'GIS INTEGRATED'
  },
  {
    id: 'const',
    title: 'Construction & Engineering',
    subtitle: 'Digital Project Environments & Scenario Planning',
    description: 'Compare as-built 3D point clouds directly against BIM design models to catch spatial clash errors before fabrication.',
    metric: '65%',
    metricLabel: 'Rework Reduction',
    features: [
      'BIM vs. As-Built point cloud alignment',
      'Site safety clearance zone monitoring',
      '4D schedule progression simulation'
    ],
    iconUrl: '/Parallex Graphics/industry applications (4).svg',
    badge: 'AS-BUILT SYNC'
  },
  {
    id: 'ind',
    title: 'Industrial Operations',
    subtitle: 'Asset Intelligence & Predictive Operations',
    description: 'Connect heavy chemical refineries, mining facilities, and energy plants into unified, hazard-mapped digital command hubs.',
    metric: '80%',
    metricLabel: 'Safety Incident Reduction',
    features: [
      'Hazardous gas & thermal leak detection',
      'Emergency evacuation route simulation',
      'Extreme environment remote monitoring'
    ],
    iconUrl: '/Parallex Graphics/industry applications (5).svg',
    badge: 'SCADA CONNECTED'
  }
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    step: 'LAYER 01',
    layer: 'PHYSICAL ENVIRONMENT',
    component: 'Field Assets, Sensors, CAD Models, Cameras',
    description: 'Physical equipment, PLC controllers, IoT sensors, cameras, and BIM geometry assets in the physical space.',
    flowType: 'teal',
    specs: ['LiDAR Point Clouds', 'CAD / STEP / BIM', 'SCADA / PLC Feeds', 'Environmental Sensors']
  },
  {
    step: 'LAYER 02',
    layer: 'DATA INGESTION',
    component: 'Edge Gateway & Message Queue Engine',
    description: 'High-throughput stream engine aggregating data protocols at sub-millisecond intervals.',
    flowType: 'teal',
    specs: ['MQTT / OPC-UA', 'Kafka Queue Stream', 'Zero-Trust Encryption', 'Edge Cache Sync']
  },
  {
    step: 'LAYER 03',
    layer: 'SPATIAL INTELLIGENCE',
    component: 'Topological 3D Graph & Coordinate Resolver',
    description: 'Correlates raw sensor telemetry with physical 3D spatial boundaries and structural proximity.',
    flowType: 'lavender',
    specs: ['3D Spatial Graph', 'Raycast Proximity Bounds', 'Kinematic Constraints', 'Geometric Normalization']
  },
  {
    step: 'LAYER 04',
    layer: 'DIGITAL TWIN',
    component: 'WebGPU Render Engine & State Mirror',
    description: 'Photorealistic, interactive 3D virtual environment operating in lockstep with field assets.',
    flowType: 'teal',
    specs: ['WebGPU Canvas API', 'Multi-Layer Shader Overlays', 'Level of Detail (LOD) Scaling', 'XR / VR Spatial Mesh']
  },
  {
    step: 'LAYER 05',
    layer: 'AI ANALYTICS',
    component: 'Spatial Transformer Neural Network',
    description: 'Evaluates multi-variable spatial dependencies, uncovers root causes, and predicts anomalies.',
    flowType: 'lavender',
    specs: ['Causal AI Reasoning', 'Predictive Failure Models', 'Thermal & Stress Analytics', 'Automated Anomaly Scoring']
  },
  {
    step: 'LAYER 06',
    layer: 'SIMULATION',
    component: 'Discrete Event & Physics Scenario Engine',
    description: 'Simulates what-if scenarios, capacity shifts, and operational modifications prior to live deployment.',
    flowType: 'lavender',
    specs: ['Monte Carlo Simulation', 'Airflow & Thermal CFD', 'Logistics Bottleneck Modeling', 'Cost/Risk Projections']
  },
  {
    step: 'LAYER 07',
    layer: 'OPERATIONAL INTELLIGENCE',
    component: 'Enterprise Command API & Automation Dispatch',
    description: 'Translates insights into SCADA closed-loop actions, dispatch tickets, and live dashboard alerts.',
    flowType: 'coral',
    specs: ['Closed-Loop SCADA Control', 'ServiceNow / Jira Tickets', 'Operational HUD Displays', 'Real-time Push Alerts']
  }
];

export const INTEGRATION_NODES: IntegrationNode[] = [
  { id: 'int-1', name: 'Autodesk Revit / BIM', category: '3D Models', description: 'Direct IFC/Revit model synchronization with bi-directional asset ID mapping.', status: 'connected', protocol: 'REST / GraphQL', x: 18, y: 22 },
  { id: 'int-2', name: 'Siemens MindSphere', category: 'IoT & Sensors', description: 'Industrial IoT sensor stream integration over secure OPC-UA protocol.', status: 'connected', protocol: 'OPC-UA / MQTT', x: 22, y: 72 },
  { id: 'int-3', name: 'PTC ThingWorx', category: 'Real-Time Data', description: 'High-speed telemetry ingestion from industrial edge devices.', status: 'connected', protocol: 'WebSockets', x: 50, y: 15 },
  { id: 'int-4', name: 'SAP S/4HANA ERP', category: 'Enterprise APIs', description: 'Correlate physical asset wear with enterprise maintenance work orders.', status: 'connected', protocol: 'gRPC / OData', x: 82, y: 24 },
  { id: 'int-5', name: 'Schneider EcoStruxure', category: 'Operational Systems', description: 'Building management system (BMS) energy and thermal data sync.', status: 'connected', protocol: 'BACnet / IP', x: 78, y: 74 },
  { id: 'int-6', name: 'Honeywell Forge', category: 'Operational Systems', description: 'Facility security, fire alarm, and occupancy sensor streaming.', status: 'syncing', protocol: 'MQTT', x: 50, y: 85 }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For teams beginning their digital twin journey.',
    priceMonthly: 379,
    priceAnnual: 303,
    features: [
      '1 Physical Facility / Site',
      'Up to 1,000 Connected Assets',
      'Sub-second Digital Twin Sync',
      'Standard Spatial Intelligence Engine',
      'Basic AI Anomaly Alerts',
      'Email & Community Support',
      'Standard 3D CAD/IFC Importer'
    ],
    ctaText: 'Start Starter Trial',
    linkMonthly: 'https://buy.stripe.com/test_dRmfZj3YhfaFcxtgB08bS00',
    linkAnnual: 'https://buy.stripe.com/test_aFa8wR2Ud2nTgNJ1G68bS01'
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'For growing operational teams managing complex environments.',
    priceMonthly: 1279,
    priceAnnual: 1023,
    featured: true,
    badge: 'MOST POPULAR',
    features: [
      'Up to 5 Physical Facilities / Sites',
      'Up to 15,000 Connected Assets',
      'Real-time WebGPU Spatial Twin Render',
      'Full AI Environment Analytics Suite',
      'Interactive Scenario Simulation Engine',
      'Spatial Operations Command Center HUD',
      'Custom ERP/SCADA Integrations (SAP, Siemens)',
      '24/7 Dedicated Operational Support',
      'Role-Based Spatial Access Control'
    ],
    ctaText: 'Launch Professional',
    linkMonthly: 'https://buy.stripe.com/test_cNi6oJ1Q9aUp69598y8bS02',
    linkAnnual: 'https://buy.stripe.com/test_14A3cx7at7Id8hdgB08bS03'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For global industrial, manufacturing, and campus environments.',
    priceMonthly: 'CUSTOM',
    priceAnnual: 'CUSTOM',
    badge: 'UNLIMITED POWER',
    features: [
      'Unlimited Global Sites & Campuses',
      'Unlimited Connected Field Assets',
      'Custom Spatial Transformer AI Models',
      'Closed-Loop Automated SCADA Control',
      'Dedicated On-Premise or Private Cloud',
      'Custom Hardware Sensor Ingestion Pipeline',
      'Dedicated Solutions Architect & SLA',
      'Custom Security Audits & SOC2 Type II'
    ],
    ctaText: 'Contact Enterprise Team'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Parallax Nest?',
    answer: 'Parallax Nest is a Spatial AI and Digital Twin platform that enables organizations to create intelligent digital representations of physical environments, visualize operations, and optimize decision making through advanced analytics and simulation.'
  },
  {
    id: 'faq-2',
    category: 'Technology',
    question: 'How does Parallax Nest use Digital Twin technology?',
    answer: 'Parallax Nest connects spatial data, operational systems, and real-world assets to create interactive digital environments. These digital twins allow teams to monitor conditions, analyze performance, and simulate future scenarios.'
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'What industries can benefit from Parallax Nest?',
    answer: 'Parallax Nest is designed for industries managing complex physical environments, including manufacturing, smart infrastructure, construction, engineering, facilities management, and industrial operations.'
  },
  {
    id: 'faq-4',
    category: 'Integration',
    question: 'Can Parallax Nest integrate with existing enterprise systems?',
    answer: 'Yes. Parallax Nest can connect with operational platforms, IoT networks, sensor systems, enterprise applications, and data sources to create a unified spatial intelligence environment.'
  },
  {
    id: 'faq-5',
    category: 'Technology',
    question: 'How does Spatial AI improve operational decision-making?',
    answer: 'Spatial AI adds context to operational data by understanding locations, assets, environments, and relationships between physical elements. This helps organizations identify patterns, predict challenges, and make smarter decisions.'
  },
  {
    id: 'faq-6',
    category: 'Deployment',
    question: 'Is Parallax Nest suitable for large-scale enterprise deployments?',
    answer: 'Yes. Parallax Nest is designed to support enterprise environments with scalable digital twin management, real time monitoring, advanced analytics, and customizable integration capabilities.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'Parallax Nest helped us transform complex operational data into a clear, interactive digital environment. Our teams can now understand assets, workflows, and facility conditions through a unified spatial experience.',
    author: 'Anne Franklin',
    role: 'Operations Director',
    company: 'Industrial Manufacturing',
    industry: 'Manufacturing',
    metric: '$1.4M',
    metricLabel: 'Prevented Stoppage Cost',
    rating: 5,
    accentColor: 'teal',
    avatarInitials: 'AF',
    avatarUrl: '/Parallex Graphics/Anne.svg'
  },
  {
    id: 't-2',
    quote: 'The ability to simulate scenarios before making operational changes has completely changed how we plan and optimize our infrastructure. Parallax Nest gives us the intelligence layer we were missing.',
    author: 'Edward Jones',
    role: 'Infrastructure Planning Manager',
    company: 'Global Infrastructure',
    industry: 'Smart Infrastructure',
    metric: '40+',
    metricLabel: 'Simulated Scenarios',
    rating: 5,
    accentColor: 'lavender',
    avatarInitials: 'EJ',
    avatarUrl: '/Parallex Graphics/edward.svg'
  },
  {
    id: 't-3',
    quote: 'Traditional monitoring systems showed us information, but Parallax Nest helped us understand our environment. The combination of Spatial AI and digital twins provides unmatched operational clarity.',
    author: 'Nick Parker',
    role: 'Digital Transformation Lead',
    company: 'Enterprise Tech',
    industry: 'Industrial',
    metric: '62%',
    metricLabel: 'Faster MTTR',
    rating: 5,
    accentColor: 'coral',
    avatarInitials: 'NP',
    avatarUrl: '/Parallex Graphics/nick.svg'
  },
  {
    id: 't-4',
    quote: 'Managing multiple facilities became significantly easier with real-time visualization and connected asset intelligence. Parallax Nest gives our teams a complete view of what is happening across our environments.',
    author: 'Cynthia Rogers',
    role: 'Facility Management Executive',
    company: 'Apex Campus Group',
    industry: 'Facilities',
    metric: '34%',
    metricLabel: 'Cost Reduction',
    rating: 5,
    accentColor: 'teal',
    avatarInitials: 'CR',
    avatarUrl: '/Parallex Graphics/cynthia.svg'
  },
  {
    id: 't-5',
    quote: 'Parallax Nest created a shared digital workspace where engineering, operations, and management teams can collaborate using the same intelligent representation of our physical environment.',
    author: 'Alan James',
    role: 'Engineering Program Manager',
    company: 'Nordic Automation Engineering',
    industry: 'Manufacturing',
    metric: '< 18ms',
    metricLabel: 'Live Sync Latency',
    rating: 5,
    accentColor: 'lavender',
    avatarInitials: 'AJ',
    avatarUrl: '/Parallex Graphics/alan.svg'
  },
  {
    id: 't-6',
    quote: 'By combining spatial intelligence, AI analytics, and simulation capabilities, Parallax Nest provides the foundation for smarter, more predictive operational management.',
    author: 'Amelie Johnson',
    role: 'Enterprise Technology Strategist',
    company: 'Synergy Tech',
    industry: 'Logistics',
    metric: '80%',
    metricLabel: 'Efficiency Gain',
    rating: 5,
    accentColor: 'coral',
    avatarInitials: 'AJ',
    avatarUrl: '/Parallex Graphics/amilie.svg'
  }
];

