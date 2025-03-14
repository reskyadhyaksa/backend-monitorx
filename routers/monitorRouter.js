import express from "express";
import { createMonitorHTTPs } from "../controllers/monitors/monitorHTTP.js";
import { createMonitorServers } from "../controllers/monitors/monitorServer.js";
import { createMonitorPorts } from "../controllers/monitors/monitorPort.js";
import { createMonitorNetworks } from "../controllers/monitors/monitorNetwork.js";
import { GetAllMonitorWithLogs } from "../controllers/monitor.js";

const router = express.Router();

router.post('/api/add_monitor_http', createMonitorHTTPs);
router.post('/api/add_monitor_server', createMonitorServers);
router.post('/api/add_monitor_port', createMonitorPorts);
router.post('/api/add_monitor_network', createMonitorNetworks);

router.get('/api/get_monitor_with_logs', GetAllMonitorWithLogs);

export default router;