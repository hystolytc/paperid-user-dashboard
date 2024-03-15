import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { first } from 'rxjs/operators';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loading', () => {
    const component = new UserListComponent()
    expect(component.loading).withContext('true at the first load').toBe(true)
  })

  it('dataList should be empty', () => {
    const component = new UserListComponent()
    expect(component.dataList.length).withContext('empty list at the first load').toBe(0)
  })

  it('should select user', () => {
    const component = new UserListComponent()
    const user = {id: 1, name: 'user test 1'}
    component.selectedUser.pipe(first()).subscribe((selectedUser: Record<string, any>) => {
      expect(selectedUser).toBe(user)
    })
    component.onSelectedUser(user)
  })
});
