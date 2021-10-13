import moment from "moment";
import { UserRole } from "./enums";
export default class Helpers {
  static MonthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  static DayNames = ["D", "L", "M", "MI", "J", "V", "S"];
  static Filters = {
    Empty: "",
    EmptyText() {
      return this.Empty;
    },
    Boolean(value: any) {
      return value ? "Sí" : "No";
    },
    FromNow(value: string) {
      return moment(value).fromNow();
    },
    Cedula(cedula: string) {
      if (!cedula) return "";

      if (cedula.length == 11) {
        const prefijo = cedula.substring(0, 3).concat("-");
        const medio = cedula.substring(3, 10).concat("-");
        const sufijo = cedula.substring(10, 11);
        const result = prefijo.concat(medio).concat(sufijo);
        return result;
      }
      return cedula;
    },
    PhoneToStr(tel: string) {
      if (tel) return tel.replace(/\D/g, "");

      return tel;
    },
    Phone(tel: string) {
      if (!tel) return "";

      if (tel.length == 10) {
        const prefijo = tel.substring(0, 3);
        const medio = tel.substring(3, 6).concat("-");
        const sufijo = tel.substring(6, 10);
        const result = `(${prefijo}) `.concat(medio).concat(sufijo);
        return result;
      }
      return tel;
    },
    UserRole(val: UserRole) {
      return val === UserRole.ADMIN ? 'Administrador':'Usuario';
    },
    Date(value: string, format = "L") {
      if (!value) return this.Empty;
      return moment(value).format(format);
    },
    Time(value: string, format = "LT") {
      if (!value) return this.Empty;
      return moment(value).format(format);
    },
    Dots(value: string, length = 10) {
      if (!value) return this.Empty;
      return value.length > length ? value.substring(0, length) + "..." : value;
    },
  };
  static FilterToValue = {
    Phone(phone: string) {
      return phone
        .trim()
        .replace("(", "")
        .replace("-", "")
        .replace(")", "")
        .replace(" ", "");
    },
    Cedula(cedula: string) {
      return cedula
        .trim()
        .replace("-", "")
        .replace("-", "");
    },
  };
  static Validators = {
    isCedula(ced: string) {
      if (!ced) return false;
      if (ced.length < 11) return false;
      if (ced.length > 13) return false;
      if (ced.length > 11 && !ced.includes("-")) return false;
      if (ced.length === 12 && ced.includes("-")) return false;
      return ced.replace(/-/g, "").match(/^[0-9]+$/);
    },
    IsRealCedula(cedula: string) {
      const regex = new RegExp("^[0-9]{3}-?[0-9]{7}-?[0-9]{1}$");

      if (!regex.test(cedula)) {
        return false;
      }

      cedula = cedula.replace(/-/g, '');
      return this.CheckDigit(cedula);

    },
    CheckDigit(value: string) {
      let sum = 0;
      for (let i = 0; i < 10; ++i) {
        const n = ((i + 1) % 2 != 0 ? 1 : 2) * parseInt(value.charAt(i));
        sum += (n <= 9 ? n : n % 10 + 1);
      }
      const dig = ((10 - sum % 10) % 10);

      return dig == parseInt(value.charAt(10));
    },
    ValidateCedula(cedula: string) {
      const numerosProcesados: number[] = []
      const numerosIgnorados: number[] = []
      cedula = cedula.trim();
      cedula = cedula.replace("-", "");
      let esValida = false;
      if (cedula.length != 11) {
        return false;
      }
      const str = cedula.match(/\d+/);
      if (str === null)
        return false;

      for (let i = 9; i >= 0; i--) {

        if (i % 2 == 0) {
          //Si la posicion del indice es par, ignoramos el digito de la cedula y lo almacenamos como int.
          numerosIgnorados.push(parseInt(cedula[i].toString()));
        }
        else {
          //Se convierte el digito de la cedula analizado de char, a string, y luego a int
          const numero = parseInt(cedula[i].toString());

          if ((numero * 2) > 9) {
            //Si al multiplicar el numero por dos, pasa de 9, le restamos 9, y almacenamos el resultado
            numerosProcesados.push((numero * 2) - 9);
          }
          else {
            //De lo contrario, solo multiplicamos y almacenamos el resultado. Sin restar nada
            numerosProcesados.push(numero * 2);
          }
        }
      }

      const sumatoriaProceso = numerosIgnorados.reduce((a: number, b: number) => a + b, 0) + numerosProcesados.reduce((a: number, b: number) => a + b, 0);

      let contador = 10;
      while (contador < sumatoriaProceso) {
        contador += 10;
      }

      const resultadoProceso = contador - sumatoriaProceso;
      if (resultadoProceso == parseInt(cedula[10]))
        esValida = true;

      return esValida;

    }
  };
  static MapToObject<T>(
    fromObject: any,
    toObject: T | any,
    config: any = null
  ): T {
    const dateIsoRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/i;
    fromObject = JSON.parse(JSON.stringify(fromObject));
    config = config || { ignore: [] };

    for (const key in fromObject) {
      if (fromObject.hasOwnProperty(key)) {
        if (
          !config.ignore.length ||
          !config.ignore.some((x: any) => x === key)
        ) {
          toObject[key] = fromObject[key];
          if (dateIsoRegex.test(toObject[key])) {
            toObject[key] = new Date(toObject[key]);
          }
        }
      }
    }
    return toObject;
  }
  static GetValueFromPath(obj: any, path: string) {
    return path
      .split(".")
      .reduce((prev, curr) => (prev ? prev[curr] : null), obj || self);
  }
  static MapSimpleObject<T>(
    fromObject: any,
    toObject: T | any,
    config: any = null
  ): T {
    fromObject = JSON.parse(JSON.stringify(fromObject));
    config = config || { ignore: [] };

    for (const key in fromObject) {
      if (fromObject.hasOwnProperty(key)) {
        if (
          !config.ignore.length ||
          !config.ignore.some((x: any) => x === key)
        ) {
          toObject[key] = fromObject[key];
        }
      }
    }
    return toObject;
  }
  static NormalizeNFD(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  static Camelize(str: string) {
    str = this.NormalizeNFD(str);
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
  static NewGuid() {
    let d = new Date().getTime();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }
}
