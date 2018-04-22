import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatTableModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatSortModule,
  MatSidenavModule,
  MatCommonModule,
  MatDialogModule,
  MatMenuModule,
  MatCardModule,
  MatSnackBarModule,
  MatLineModule,
  MatToolbarModule,
  MatSelectModule,
  MatProgressBarModule,
  MatRippleModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatListModule,
  MatExpansionModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatChipsModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'lodash';


@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatRadioModule, MatAutocompleteModule, MatIconModule,
    MatInputModule, MatListModule, MatTableModule, MatSortModule, MatCommonModule, MatSidenavModule, MatMenuModule,
    MatSnackBarModule, MatDialogModule, MatLineModule, MatToolbarModule, MatSelectModule, MatCardModule, MatRippleModule,
    MatPaginatorModule, MatSlideToggleModule, MatTabsModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatButtonToggleModule, MatChipsModule, MatSliderModule,
   HttpModule, ReactiveFormsModule,FormsModule,
  ],
  declarations: [


  ],
  providers: [

  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatRadioModule, MatAutocompleteModule, MatIconModule,
    MatInputModule, MatListModule, MatTableModule, MatSortModule, MatCommonModule, MatSidenavModule, MatMenuModule,
    MatSnackBarModule, MatDialogModule, MatLineModule, MatToolbarModule, MatSelectModule, MatCardModule, MatRippleModule,
    MatPaginatorModule, MatSlideToggleModule, MatTabsModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatButtonToggleModule, MatChipsModule, MatSliderModule,
    FormsModule, HttpModule,ReactiveFormsModule,

  ],

})
export class SharedModule {
}
