import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from "./user-details.component";
import { first } from 'rxjs/operators';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should loading', () => {
    const component = new UserDetailsComponent()
    expect(component.loading).withContext('true at the first load').toBe(true)
  })

  it('should not show', () => {
    const component = new UserDetailsComponent()
    expect(component.show).withContext('false at the first load').toBe(false)
  })

  it('data should be empty', () => {
    const component = new UserDetailsComponent()
    expect(component.data).withContext('empty data at the first load').toEqual({})
  })

  it('should close modal', () => {
    const component = new UserDetailsComponent()
    component.close.pipe(first()).subscribe(() => {
      expect(component.show).toBe(false)
    })
    component.onCloseModal()
  })

  it('should return background image style', () => {
    const component = new UserDetailsComponent()
    expect(component.onSetBackground()).withContext('return background image style').toEqual('background-image: linear-gradient(to bottom right, #fde68a, #eee);')
  })
})