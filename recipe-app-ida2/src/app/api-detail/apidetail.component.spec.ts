
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RecipeAPIDetailComponent } from './apidetail.component';


describe('RecipeAPIDetailComponent', () => {
  let component: RecipeAPIDetailComponent;
  let fixture: ComponentFixture<RecipeAPIDetailComponent>;
  let mockActivatedRoute: any;
  let mockRecipeService: any;
  let mockRecipeData: any;

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => '123' // Example recipe id
        }
      }
    };

    mockRecipeData = {
      // Mock recipe data here
    };

    mockRecipeService = jasmine.createSpyObj('RecipeService', ['getRecipeById']);
    mockRecipeService.getRecipeById.and.returnValue(of(mockRecipeData));

    TestBed.configureTestingModule({
      declarations: [ RecipeAPIDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeAPIDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch recipe data on initialization', () => {
    expect(component.recipeId).toEqual('123'); // Example recipe id
    expect(mockRecipeService.getRecipeById).toHaveBeenCalledWith('123'); // Example recipe id
    expect(component.allRecipes).toEqual(mockRecipeData);
    expect(component.recipe).toEqual(mockRecipeData[0]); // Assuming recipe data is an array
  });
});
