# Acoustic-mesh
![Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen)
![Language](https://img.shields.io/badge/Language-JavaScript%20%7C%20Node.js-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)
![Topics](https://img.shields.io/badge/topics-webrtc%20%7C%20websocket%20%7C%20acoustic%20%7C%20mesh--network%20%7C%20phi--harmonic-purple)

> **Governance:** DGAF / Agent Amethyst — Yes. This project is part of the Flickerflash DGAF Phi-Harmonic Pentagon ecosystem. See [DGAF-Framework](https://github.com/Flickerflash/DGAF-Framework) for spine documentation.

**Acoustic Mesh Platform** — a production-grade multi-device acoustic mesh system implementing WebRTC peer connections, WebSocket signaling, secure sensor pipelines, feature extraction, and SLAM graph aggregation, anchored to the Phi-Harmonic Pentagon ecosystem.

## Architecture

```
acoustic-mesh/
├── apps/
│   └── web/              # Frontend WebRTC client
├── services/
│   └── signaling/        # WebSocket signaling server
├── packages/             # Shared utilities
└── package.json          # Monorepo workspace config
```

## Core Features

- **WebRTC Multi-device Mesh** — peer-to-peer audio/sensor streams across N devices
- **WebSocket Signaling** — lightweight coordination layer (`services/signaling`)
- **Secure Sensor Pipelines** — encrypted ingestion and routing
- **Feature Extraction** — acoustic signal decomposition and modal analysis
- **SLAM Graph Aggregation** — spatial mapping from distributed acoustic nodes
- **Docker Deployment** — containerized for production
- **Phi-Harmonic Integration** — modal frequency analysis aligned to Pentagon ecosystem

## Quick Start

```bash
git clone https://github.com/Flickerflash/Acoustic-mesh.git
cd Acoustic-mesh
npm install
npm run dev
```

This starts the signaling server and web client concurrently via `concurrently`.

## Monorepo Workspaces

| Workspace | Path | Purpose |
|-----------|------|---------|
| Web App | `apps/web` | WebRTC frontend client |
| Signaling | `services/signaling` | WebSocket coordination |
| Packages | `packages/*` | Shared libs and utilities |

## Related Ecosystem

- [Driftwatch](https://github.com/Flickerflash/Driftwatch) — Phi-driven drift detection and harmonic state monitoring
- [3d-visualization-hub](https://github.com/Flickerflash/3d-visualization-hub) — Phi-harmonic modal analysis and 3D data viz
- [DGAF-Framework](https://github.com/Flickerflash/DGAF-Framework) — governance spine for multi-agent systems
- [junior-apogee-app](https://github.com/Flickerflash/junior-apogee-app) — AI evaluation and QA platform

## License

MIT License — see [LICENSE](LICENSE) for details.

## Provenance

Developed by [Ndr "Ender" Hensel](https://github.com/Flickerflash) — AI Orchestration Engineer & Systems Architect, Columbus OH.
