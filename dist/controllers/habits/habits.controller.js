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
exports.deleteHabitsController = exports.updateHabitsController = exports.updateHabitWeekDaysController = exports.listHabitsController = exports.createHabitsController = void 0;
const createHabits_service_1 = require("../../services/habits/createHabits.service");
const listHabits_service_1 = require("../../services/habits/listHabits.service");
const updateHabits_service_1 = require("../../services/habits/updateHabits.service");
const deleteHabits_service_1 = require("../../services/habits/deleteHabits.service");
const weekDays_service_1 = require("../../services/habits/weekDays.service");
const createHabitsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const habitsData = req.body;
    habitsData.userId = req.user.id; // Adicione o ID do usuário aqui
    const newHabit = yield (0, createHabits_service_1.createHabitsService)(habitsData);
    return res.status(201).json(newHabit);
});
exports.createHabitsController = createHabitsController;
const listHabitsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const habits = yield (0, listHabits_service_1.listHabitsService)();
    return res.json(habits);
});
exports.listHabitsController = listHabitsController;
const updateHabitWeekDaysController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const habitId = req.params.id;
    const { weekDays } = req.body;
    const updatedHabit = yield (0, weekDays_service_1.updateHabitWeekDaysService)(habitId, weekDays);
    return res.status(200).json(updatedHabit);
});
exports.updateHabitWeekDaysController = updateHabitWeekDaysController;
const updateHabitsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const habitsData = req.body;
    const id = req.params.id;
    const habitUpdate = yield (0, updateHabits_service_1.updateHabitsService)(habitsData, id);
    return res.status(200).json(habitUpdate);
});
exports.updateHabitsController = updateHabitsController;
const deleteHabitsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteHabits_service_1.deleteHabitsService)(req.params.id);
    return res.status(204).json();
});
exports.deleteHabitsController = deleteHabitsController;
