import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Hero} from './hero';

export class MockHeroService {
  getHeroes(): Observable<Hero[]> {
    return of([]);
  }

  getHero() {
    return of ({});
  }
}
