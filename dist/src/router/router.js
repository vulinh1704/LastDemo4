"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = require("./user-router");
const router = (0, express_1.Router)();
router.use('/auth', user_router_1.userRouter);
//# sourceMappingURL=router.js.map