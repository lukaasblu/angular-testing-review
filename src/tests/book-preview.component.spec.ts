import { async, fakeAsync, TestBed } from '@angular/core/testing';
import { BookPreviewComponent } from '../components/book/book-preview.component';
import { Book } from '../classes/book';
import { AppModule } from '../app/app.module';

describe('BookPreviewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  it('should show book info', fakeAsync(() => {
    const fixture = TestBed.createComponent(BookPreviewComponent);
    const component = fixture.componentInstance;
    const debugElement = fixture.debugElement;

    component.book = new Book('Cracking the coding interview');

    fixture.detectChanges();

    expect(debugElement.nativeElement.querySelector('h1').textContent)
      .toEqual('Cracking the coding interview');
  }));
});
