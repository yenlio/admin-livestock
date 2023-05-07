import { Component, ElementRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, of, switchMap, tap } from 'rxjs';
import { User } from 'src/app/data/types/entity/user';
import { deleteuserRequest, getuserRequest } from 'src/app/store/userStore/user.actions';
import { selectUser } from 'src/app/store/userStore/user.selector';
import { UserServiceService } from 'src/app/data/service/user-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  isVisible = false;
  data: any = [];// khai bao data khởi tạo
  showSearches: boolean = false; //ẩn/ hiện option DIV
  isSearching:boolean = false; //hiển thị loading
  searchedCars: any = []; // giá trị match với  tìm kiếm
  searchText:any
  listLibs:any[]=[]

  user: User = {
    id: '',
    name: '',
    age: 0
  };
  constructor(private store: Store,private UserServiceService:UserServiceService) {
    this.data = ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen'];

  }
  @ViewChild('SearchInput') carInput!: ElementRef;
  getCars(name:any): Observable<any> {
    //Here we perrform the simple call to filter function. You can also call to API here for the desired result.

     return of(this.filterCars(name)) //used `of` to convert array to Observable
     //return this.http.post("url", data, {headers})  //to get the result from API use this line
   }

   filterCars(name:any) {
     return this.data.filter((val:any) => val.toLowerCase().includes(name.toLowerCase()) == true )
   }

  search(){

  }

   listUser$ = this.store.pipe(
    select(selectUser) );

  ngOnInit(): void {
    this.search()
    this.store.dispatch(getuserRequest());
    console.log(this.listUser$,"du lieu");
    this.UserServiceService.getlistLib().subscribe((res:any)=>{
      console.log(res," res");
      const result = []
      for (const key in res[0].k) {
        if (Object.prototype.hasOwnProperty.call(res[0].k, key)) {
          const element = res[0].k[key];
          const app1 = res[1].find((i: any) => i.name == element.name)
          const app2 = res[2].find((i: any) => i.name == element.name)
          const el = {
            ...element,
            apps: [app1, app2]
          }
          result.push(el)
        }
      }
      this.listLibs = result
    })

  }
  showModal(): void {
    this.isVisible = true;
    // this.user
  }

  deleteUser(id:any):void{
    this.store.dispatch(deleteuserRequest({ id: id }));
  }
  editUser(User:User){
    this.user={...User}

    console.log(User,"du lieu user");
    this.showModal();
  }

  setCarName(name:any) {
    this.searchedCars = this.filterCars(name);
    // this.setcarNameEvent.emit({name});
    // this.carSearchInput.nativeElement.value = name;
    this.showSearches = false;
  }

  trackById(index:any,item:any):void{
    return item._id;
  }



}
