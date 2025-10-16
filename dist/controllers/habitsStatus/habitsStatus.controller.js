"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedHabitStatusController = exports.listHabitsStatusController = exports.createHabitsStatusController = void 0;
const createListHabitsStatus_service_1 = require("../../services/habitsStatus/createListHabitsStatus.service");
const listHabitsStatus_service_1 = require("../../services/habitsStatus/listHabitsStatus.service");
const updateHabitsStatus_service_1 = require("../../services/habitsStatus/updateHabitsStatus.service");
const createHabitsStatusController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const habitId = req.params.id;
    const statusData = req.body;
    const newStatus = yield (0, createListHabitsStatus_service_1.createHabitsStatusService)(habitId, statusData);
    return res.status(201).json(newStatus);
});
exports.createHabitsStatusController = createHabitsStatusController;
const listHabitsStatusController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const habits = yield (0, listHabitsStatus_service_1.listHabitsStatus)();
    return res.json(habits);
});
exports.listHabitsStatusController = listHabitsStatusController;
const updatedHabitStatusController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const statusData = req.body;
    const status = yield (0, updateHabitsStatus_service_1.updateHabitStatusService)(id, statusData);
    return res.status(200).json(status);
});
exports.updatedHabitStatusController = updatedHabitStatusController;
