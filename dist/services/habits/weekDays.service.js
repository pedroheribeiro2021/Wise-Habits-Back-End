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
exports.updateHabitWeekDaysService = void 0;
const data_source_1 = require("../../data-source");
const habits_entity_1 = require("../../entities/habits.entity");
const updateHabitWeekDaysService = (habitId, weekDays) => __awaiter(void 0, void 0, void 0, function* () {
    const habitRepository = data_source_1.AppDataSource.getRepository(habits_entity_1.Habits);
    const habit = yield habitRepository.findOneBy({ id: habitId });
    if (!habit) {
        throw new Error("Hábito não encontrado");
    }
    habit.weekDays = weekDays;
    yield habitRepository.save(habit);
    return habit;
});
exports.updateHabitWeekDaysService = updateHabitWeekDaysService;
