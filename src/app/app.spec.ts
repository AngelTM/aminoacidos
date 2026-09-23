import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    localStorage.setItem('memorama-lang', 'en');
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should render the title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Amino Acid Memorama');
  });

  it('should deal a name card and an image card for each pair', () => {
    const app = TestBed.createComponent(App).componentInstance;
    app.setLevel(10);
    const cards = app.cards();
    expect(cards.length).toBe(20);
    expect(cards.filter((c) => c.kind === 'name').length).toBe(10);
    expect(cards.filter((c) => c.kind === 'image').length).toBe(10);
  });

  it('should mark a pair as matched when name and image agree', () => {
    const app = TestBed.createComponent(App).componentInstance;
    const [first] = app.cards();
    const partner = app.cards().find((c) => c.acid.id === first.acid.id && c.uid !== first.uid)!;
    app.flip(first);
    app.flip(partner);
    expect(app.matchedPairs()).toBe(1);
    expect(app.moves()).toBe(1);
    app.ngOnDestroy();
  });

  it('should switch the UI and amino acid names to Spanish', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.setLang('es');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Memorama de Aminoácidos');
    expect(document.documentElement.lang).toBe('es');
    expect(localStorage.getItem('memorama-lang')).toBe('es');
    const acid = app.cards()[0].acid;
    expect(app.acidName(acid)).toBe(acid.name.es);
  });
});
