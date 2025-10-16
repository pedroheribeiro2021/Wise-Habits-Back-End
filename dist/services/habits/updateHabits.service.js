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
exports.updateHabitsService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const data_source_1 = require("../../data-source");
const habits_entity_1 = require("../../entities/habits.entity");
const updateHabitsService = (habitsData, habitsId) => __awaiter(void 0, void 0, void 0, function* () {
    const HabitsRepository = data_source_1.AppDataSource.getRepository(habits_entity_1.Habits);
    const findHabits = yield HabitsRepository.findOneBy({
        id: habitsId
    });
    const updatedHabits = HabitsRepository.create(Object.assign(Object.assign({}, findHabits), habitsData));
    yield HabitsRepository.save(updatedHabits);
    return updatedHabits;
});
exports.updateHabitsService = updateHabitsService;
