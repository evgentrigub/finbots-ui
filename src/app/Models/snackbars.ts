import { MatSnackBarConfig } from "@angular/material/snack-bar"


export const successSnackBarConfig: MatSnackBarConfig = { duration: 5000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: 'style-success' }
export const failedSnackBarConfig: MatSnackBarConfig = { verticalPosition: 'top', horizontalPosition: 'right', panelClass: 'error-snackbar' }
