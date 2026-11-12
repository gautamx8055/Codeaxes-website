type ServiceContent = {
  summary: string;
  capabilities: [string, string][];
  stack: string[];
};

// Explanatory copy for the catalogue; no project results or vendor affiliations
// are inferred from the technology names supplied in the brief.
export const serviceContent: Record<string, ServiceContent> = {
  'artificial-intelligence': {
    summary: 'Bring machine learning, computer vision, and predictive models into the decisions your products and operations make every day.',
    capabilities: [
      ['Predictive intelligence', 'Model demand, risk, and operational signals using a clearly defined target and representative data.'],
      ['Computer vision', 'Design image and video pipelines for inspection, recognition, and assisted review.'],
      ['Production ML', 'Connect model evaluation, deployment, monitoring, and retraining to the systems that use the predictions.'],
    ],
    stack: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'MLflow'],
  },
  'generative-ai-llm-engineering': {
    summary: 'Engineer language-model applications with retrieval, evaluation, and controls that connect generative AI to your business knowledge.',
    capabilities: [
      ['Knowledge and retrieval', 'Prepare content, permissions, and retrieval pipelines so responses can refer to the right source material.'],
      ['Model integration', 'Integrate hosted or open models, structured outputs, and fine-tuning where evaluation supports the choice.'],
      ['Evaluation and guardrails', 'Test response quality, grounding, latency, and cost against the tasks your users need to complete.'],
    ],
    stack: ['OpenAI Models & APIs', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'Vector Databases'],
  },
  'agentic-ai-ai-automation': {
    summary: 'Connect AI agents to business workflows with explicit permissions, human review, and a traceable path from request to action.',
    capabilities: [
      ['Agent orchestration', 'Coordinate tool use, task state, and specialist agents around a bounded business process.'],
      ['Workflow integration', 'Connect enterprise systems and APIs with retries, approval steps, and exception handling.'],
      ['Operational control', 'Record actions, evaluate task completion, and give operators a way to intervene or stop a run.'],
    ],
    stack: ['LangGraph', 'AutoGen', 'CrewAI', 'MCP (Model Context Protocol)', 'Python'],
  },
  'data-transformation': {
    summary: 'Turn fragmented operational data into governed, usable data foundations for enterprise applications, analytics, and AI.',
    capabilities: [
      ['Data integration', 'Bring source systems together through batch or streaming ingestion with explicit ownership and contracts.'],
      ['Data modelling', 'Define warehouse and lakehouse models with lineage, quality checks, and consistent business entities.'],
      ['Migration and governance', 'Plan data movement, reconciliation, access, and retention alongside the application changes.'],
    ],
    stack: ['Apache Spark', 'Apache Kafka', 'Apache Airflow', 'dbt', 'Databricks'],
  },
  'data-analytics-intelligence': {
    summary: 'Build a shared view of business performance through trusted metrics, analytical models, and decision-focused reporting.',
    capabilities: [
      ['Metric foundations', 'Agree definitions, grain, and ownership before reports become competing versions of the same number.'],
      ['Business intelligence', 'Design dashboards and self-service reporting around operational and strategic decisions.'],
      ['Advanced analytics', 'Explore patterns, forecasting, and anomaly detection with documented assumptions and validation.'],
    ],
    stack: ['Power BI', 'Tableau', 'Looker', 'Snowflake', 'Microsoft Fabric'],
  },
  'software-engineering': {
    summary: 'Design and build maintainable software systems with clear architecture, reliable integrations, and an operating model your team can own.',
    capabilities: [
      ['Architecture and domains', 'Define system boundaries, data ownership, and interfaces around the business capabilities.'],
      ['Application engineering', 'Implement application logic, services, and supporting tools with reviewable code and automated checks.'],
      ['Maintainability', 'Document decisions, deployment, and operational behavior so future changes remain manageable.'],
    ],
    stack: ['TypeScript', 'Java', 'Python', 'Node.js', 'PostgreSQL'],
  },
  'web-application-development': {
    summary: 'Create accessible, responsive web applications that connect customer and employee journeys to dependable backend systems.',
    capabilities: [
      ['Web interfaces', 'Build responsive application surfaces with accessible navigation, forms, and interaction states.'],
      ['Full-stack delivery', 'Connect identity, business logic, APIs, and data to a coherent application architecture.'],
      ['Performance and resilience', 'Plan loading behavior, caching, error recovery, and browser testing around real user journeys.'],
    ],
    stack: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'TypeScript'],
  },
  'mobile-application-development': {
    summary: 'Engineer native and cross-platform mobile applications for connected, on-the-go, and offline workflows.',
    capabilities: [
      ['Native and cross-platform', 'Choose iOS, Android, or a shared codebase according to device capabilities and product constraints.'],
      ['Connected mobile workflows', 'Integrate APIs, notifications, device features, and offline synchronization with explicit conflict handling.'],
      ['Release readiness', 'Prepare signing, device testing, accessibility checks, and app-store submission materials.'],
    ],
    stack: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Kotlin Multiplatform'],
  },
  'saas-platform-engineering': {
    summary: 'Build subscription products and platforms with tenant boundaries, extensible APIs, and operational visibility designed into the foundation.',
    capabilities: [
      ['Multi-tenant architecture', 'Design tenant isolation, roles, configuration, and provisioning for the intended customer model.'],
      ['Platform capabilities', 'Connect subscriptions, billing, administration, and partner integrations through explicit contracts.'],
      ['Platform operations', 'Instrument usage, reliability, and cost so teams can operate and evolve the product after launch.'],
    ],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  'api-development-system-integration': {
    summary: 'Connect products, partners, and enterprise systems through APIs and integration flows with clear contracts and observable behavior.',
    capabilities: [
      ['API engineering', 'Define versioned interfaces, authentication, authorization, documentation, and consumer expectations.'],
      ['System integration', 'Connect applications through events, messaging, middleware, and adapters for existing systems.'],
      ['Integration reliability', 'Plan retries, idempotency, rate limits, and traceability across distributed workflows.'],
    ],
    stack: ['REST APIs', 'GraphQL', 'gRPC', 'Apache Kafka', 'MuleSoft'],
  },
  'enterprise-product-development': {
    summary: 'Develop enterprise products that bring complex roles, business rules, and organizational workflows into one coherent system.',
    capabilities: [
      ['Enterprise discovery', 'Map stakeholders, operating processes, permissions, and integration dependencies before defining the first release.'],
      ['Product implementation', 'Build configurable workflows and administration tools with documented rules and ownership.'],
      ['Adoption and evolution', 'Plan rollout, training, feedback, and ongoing product changes around how the organization works.'],
    ],
    stack: ['Java', 'Spring Boot', 'ASP.NET Core', 'React.js', 'Microsoft SQL Server'],
  },
  'enterprise-solutions': {
    summary: 'Connect enterprise applications, data, and business processes through solutions designed around your operating model.',
    capabilities: [
      ['Enterprise architecture', 'Map application capabilities, integration dependencies, and ownership across the organization.'],
      ['Business systems', 'Build or configure applications that support core workflows and shared business data.'],
      ['Integration and rollout', 'Sequence system connections, migration, and adoption with explicit business continuity requirements.'],
    ],
    stack: ['SAP', 'Microsoft Dynamics 365', 'ServiceNow', 'Oracle ERP', 'Microsoft Power Platform'],
  },
  'erp-crm-solutions': {
    summary: 'Implement and extend ERP and CRM systems so customer, financial, and operational processes share dependable data.',
    capabilities: [
      ['Platform selection and configuration', 'Match workflows and reporting requirements to the platform, extensions, and ownership model.'],
      ['Business process integration', 'Connect sales, service, finance, inventory, and other systems without duplicating ownership of records.'],
      ['Migration and adoption', 'Map source data, reconcile migrated records, and support role-based rollout and training.'],
    ],
    stack: ['SAP', 'Salesforce', 'Microsoft Dynamics 365', 'Odoo', 'ERPNext'],
  },
  'digital-transformation': {
    summary: 'Translate business change into a sequenced technology roadmap across processes, enterprise platforms, data, and user experience.',
    capabilities: [
      ['Current-state assessment', 'Understand operating constraints, system dependencies, and the manual work between applications.'],
      ['Transformation roadmap', 'Prioritize changes by business value, dependencies, and a practical path to adoption.'],
      ['Incremental delivery', 'Implement changes in measurable increments with feedback from the teams using the new systems.'],
    ],
    stack: ['Microsoft Power Platform', 'ServiceNow', 'SAP', 'Microsoft Fabric'],
  },
  'platform-modernisation': {
    summary: 'Evolve legacy applications and platforms through staged changes that protect business continuity and make future development easier.',
    capabilities: [
      ['Platform assessment', 'Map architecture, technical debt, dependencies, and the workloads that constrain change.'],
      ['Modernisation engineering', 'Refactor, replatform, or replace system boundaries according to their risk and business purpose.'],
      ['Migration and transition', 'Plan data movement, parallel operation, testing, cutover, and rollback before retiring existing components.'],
    ],
    stack: ['Java', 'ASP.NET Core', 'Docker', 'Kubernetes', 'Terraform'],
  },
  'managed-engineering-services': {
    summary: 'Extend your engineering capacity with an ongoing delivery model for product development, maintenance, and platform improvement.',
    capabilities: [
      ['Embedded engineering teams', 'Agree responsibilities, working practices, and technical ownership with your existing team.'],
      ['Continuous improvement', 'Manage a prioritized backlog spanning features, maintenance, reliability, and technical debt.'],
      ['Delivery governance', 'Use shared reviews, documentation, and delivery reporting to keep progress and decisions visible.'],
    ],
    stack: ['GitHub', 'GitLab', 'Atlassian', 'Docker', 'Grafana'],
  },
  'ui-ux-design': {
    summary: 'Design clear, accessible interfaces that help people complete complex tasks across web, mobile, and enterprise products.',
    capabilities: [
      ['Interaction design', 'Map navigation, task flows, information hierarchy, and the states that make an interface understandable.'],
      ['Interface systems', 'Create reusable components, typography, and visual rules that support consistent product delivery.'],
      ['Prototype and validate', 'Test critical journeys, accessibility, and responsive behavior before implementation decisions harden.'],
    ],
    stack: ['Figma', 'Sketch', 'Framer', 'Adobe Creative Cloud'],
  },
  'product-design': {
    summary: 'Shape product opportunities into validated concepts, prototypes, and specifications that connect user needs to engineering decisions.',
    capabilities: [
      ['Product definition', 'Frame the problem, user needs, and the outcomes the product should make possible.'],
      ['Concept and prototyping', 'Explore alternatives and test interaction, form, and workflow through prototypes.'],
      ['Design to engineering', 'Document behavior, constraints, and design intent so implementation can preserve the decisions.'],
    ],
    stack: ['Figma', 'Framer', 'SolidWorks', 'Autodesk Fusion'],
  },
  'research-insights': {
    summary: 'Reduce uncertainty through user research, usability evaluation, and evidence that helps teams choose what to build next.',
    capabilities: [
      ['Discovery research', 'Understand users, contexts, existing workarounds, and the constraints behind a product request.'],
      ['Usability evaluation', 'Observe how people complete important tasks and identify barriers in existing or proposed experiences.'],
      ['Actionable synthesis', 'Translate research findings into opportunities, priorities, and questions for the next design or engineering increment.'],
    ],
    stack: ['Figma', 'Power BI', 'Tableau'],
  },
  'service-design': {
    summary: 'Design the end-to-end service across customer touchpoints, internal teams, and the systems that support delivery.',
    capabilities: [
      ['Journey mapping', 'Trace customer and employee journeys across channels, including handoffs and failure paths.'],
      ['Service blueprints', 'Connect frontstage experiences to backstage processes, data, responsibilities, and technology.'],
      ['Service improvement', 'Prototype changes to touchpoints and operating processes with the teams responsible for delivery.'],
    ],
    stack: ['Figma', 'Microsoft Power Platform', 'ServiceNow'],
  },
  '3d-digital-experience': {
    summary: 'Create interactive 3D, spatial, and immersive experiences that make products, environments, and complex information easier to explore.',
    capabilities: [
      ['3D experience design', 'Develop scenes, interaction patterns, and visual narratives around the intended audience and device.'],
      ['Interactive implementation', 'Connect 3D assets to web or real-time runtimes with usable controls and defined performance budgets.'],
      ['Immersive experiences', 'Prototype AR, VR, and spatial experiences with attention to comfort, accessibility, and deployment constraints.'],
    ],
    stack: ['Three.js', 'WebGL', 'Blender', 'Unity', 'Unreal Engine', 'WebXR'],
  },
  'cloud-engineering': {
    summary: 'Build cloud foundations and workload architectures with a considered approach to identity, resilience, deployment, and cost.',
    capabilities: [
      ['Cloud architecture', 'Choose workload placement, network boundaries, and account structures against the operating requirements.'],
      ['Migration and infrastructure', 'Build infrastructure as code and sequence workload moves with data migration and rollback plans.'],
      ['Reliability and cost', 'Define recovery objectives, observability, capacity, and cost allocation as part of the operating model.'],
    ],
    stack: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'Terraform', 'Kubernetes'],
  },
  'cybersecurity-digital-trust': {
    summary: 'Embed security, identity, and operational resilience into applications, infrastructure, and enterprise workflows.',
    capabilities: [
      ['Security architecture', 'Review threats, trust boundaries, and control requirements across applications and infrastructure.'],
      ['Identity and application security', 'Design access controls, secure development practices, and vulnerability remediation workflows.'],
      ['Detection and resilience', 'Connect telemetry, response playbooks, and recovery planning to the systems that need protection.'],
    ],
    stack: ['Microsoft Sentinel', 'Wazuh', 'Keycloak', 'HashiCorp Vault', 'OWASP'],
  },
  'devops-mlops': {
    summary: 'Create repeatable delivery paths for applications and machine-learning systems through automation, observability, and controlled promotion.',
    capabilities: [
      ['Delivery automation', 'Build CI/CD pipelines, reproducible environments, and deployment paths with tested rollback.'],
      ['Model operations', 'Connect model artifacts, evaluation, registry, deployment, and monitoring to a governed release process.'],
      ['Platform operations', 'Instrument services and pipelines with actionable logs, metrics, and clear operational ownership.'],
    ],
    stack: ['GitHub Actions', 'Docker', 'Kubernetes', 'Argo CD', 'MLflow', 'Prometheus'],
  },
  'quality-engineering': {
    summary: 'Build confidence in product behavior through risk-based testing, automation, performance validation, and clear release evidence.',
    capabilities: [
      ['Quality strategy', 'Define the critical journeys, failure risks, environments, and evidence required for release decisions.'],
      ['Test automation', 'Create maintainable API, interface, integration, and regression coverage within the delivery workflow.'],
      ['System validation', 'Assess performance, device behavior, reliability, and hardware/software interactions where relevant.'],
    ],
    stack: ['Playwright', 'Selenium', 'Appium', 'Postman', 'k6', 'SIL/HIL Testing'],
  },
  'digital-platforms-integration': {
    summary: 'Connect digital platforms and shared enterprise capabilities through interoperable services, messaging, and integration architecture.',
    capabilities: [
      ['Platform foundations', 'Define shared services, identity, configuration, and platform interfaces used across products or teams.'],
      ['Enterprise connectivity', 'Connect business platforms through gateways, middleware, events, and managed integration flows.'],
      ['Operational visibility', 'Track data movement, errors, and dependency behavior across the platform ecosystem.'],
    ],
    stack: ['MuleSoft', 'Dell Boomi', 'Kong API Gateway', 'Apache Kafka', 'Microsoft Power Platform'],
  },
  'industrial-iot-industry-4-0': {
    summary: 'Connect equipment, industrial data, and enterprise systems to support smart factories and more visible operations.',
    capabilities: [
      ['Industrial connectivity', 'Connect machines, sensors, gateways, and business systems using appropriate industrial protocols.'],
      ['Edge and cloud systems', 'Design data acquisition, processing, and synchronization for the latency and network conditions on site.'],
      ['Operations intelligence', 'Turn equipment and process signals into asset visibility, monitoring, and decision support.'],
    ],
    stack: ['MQTT', 'OPC UA', 'Modbus', 'AWS IoT', 'Azure IoT', 'ThingsBoard'],
  },
  'embedded-systems-firmware-engineering': {
    summary: 'Engineer firmware and embedded software that connect hardware behavior, device constraints, and the wider product system.',
    capabilities: [
      ['Firmware and drivers', 'Implement device logic, peripheral integration, and hardware interfaces with explicit resource constraints.'],
      ['Embedded platforms', 'Develop on real-time or embedded Linux systems with boot, update, and diagnostic requirements in scope.'],
      ['Hardware/software validation', 'Test timing, communications, failure handling, and system behavior on the intended hardware.'],
    ],
    stack: ['Embedded C', 'Embedded C++', 'Embedded Linux', 'FreeRTOS', 'Zephyr RTOS', 'STM32'],
  },
  'industrial-automation-robotics': {
    summary: 'Develop automation and robotic systems that connect sensing, control, and operational workflows in industrial environments.',
    capabilities: [
      ['Automation architecture', 'Map equipment, process steps, control interfaces, and operator responsibilities.'],
      ['Robotic systems', 'Integrate perception, planning, motion, and hardware control for the intended task and environment.'],
      ['Simulation and commissioning', 'Validate behavior in simulation and planned site trials with documented operating boundaries.'],
    ],
    stack: ['ROS 2 (Robot Operating System)', 'NVIDIA Isaac', 'Gazebo', 'OpenCV', 'EtherCAT'],
  },
  'digital-twins-simulation': {
    summary: 'Connect virtual models and operational data to explore system behavior, validate changes, and improve asset understanding.',
    capabilities: [
      ['System and asset modelling', 'Define model boundaries, fidelity, and the engineering questions the digital representation should answer.'],
      ['Data-connected twins', 'Connect asset identity and operational signals to virtual models with traceable data ownership.'],
      ['Simulation and validation', 'Explore scenarios and compare model outputs to observed behavior before using them in decisions.'],
    ],
    stack: ['NVIDIA Omniverse', 'MATLAB & Simulink', 'Ansys', 'Siemens Simcenter', 'OpenUSD'],
  },
  'drones-autonomous-systems': {
    summary: 'Engineer autonomous system software across perception, navigation, mission planning, and connected operations.',
    capabilities: [
      ['Autonomy software', 'Integrate sensing, localization, planning, and control around a defined mission and operating environment.'],
      ['Connected missions', 'Build telemetry, mission interfaces, and system integration for operators and supporting platforms.'],
      ['Simulation and verification', 'Test behavior, failure modes, and operating limits through simulation and controlled validation.'],
    ],
    stack: ['PX4 Autopilot', 'ArduPilot', 'MAVLink', 'ROS 2 (Robot Operating System)', 'Gazebo', 'Sensor Fusion'],
  },
};
