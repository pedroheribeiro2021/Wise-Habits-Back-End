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
exports.createHabitsStatusService = void 0;
const data_source_1 = require("../../data-source");
const habitsStatus_entity_1 = require("../../entities/habitsStatus.entity");
const habits_entity_1 = require("../../entities/habits.entity");
const AppError_1 = require("../../errors/AppError");
const createHabitsStatusService = (habitId, statusData) => __awaiter(void 0, void 0, void 0, function* () {
    const habitsStatusRepository = data_source_1.AppDataSource.getRepository(habitsStatus_entity_1.HabitStatus);
    const habitRepository = data_source_1.AppDataSource.getRepository(habits_entity_1.Habits);
    const habit = yield habitRepository.findOneBy({ id: habitId });
    if (!habit) {
        throw new AppError_1.AppError("Hábito não encontrado");
    }
    const newStatus = habitsStatusRepository.create(Object.assign(Object.assign({}, statusData), { habit }));
    yield habitsStatusRepository.save(newStatus);
    return newStatus;
});
exports.createHabitsStatusService = createHabitsStatusService;
