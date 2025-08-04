import { Component, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character.interface';
import { CharacterForm } from '../../components/dragonball/character-form/character-form';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList, CharacterForm],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  private dragonballService = inject(DragonballService);

  addCharacter(newCharacter: Character) {
    this.dragonballService.addCharacter(newCharacter);
  }

  get characters() {
    return this.dragonballService.characters();
  }
}
