import { describe, expect, it } from 'vitest';
import { calculateAngle } from "/js/calculateAngle.js";

describe('Example test', () => {
    
    it('should return El Valor del Tercer Angulo es = ', () => {
        //Aceptance Criteria
        // Given
        const angle1 = 30;
        const angle2 = 60;
        //When - Action
        const result = calculateAngle(angle1, angle2)
        //Then
        expect(result).toBe("El Valor del Tercer Angulo es = 60")
    });

});