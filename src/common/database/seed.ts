import { AppDataSource } from './data-source';
import { Usuario } from 'src/modules/usuarios/entities/usuario.entity';
import { HabitanteParcela } from 'src/modules/usuarios/entities/habitante-parcela.entity';
import { Parcela } from 'src/modules/parcelas/entities/parcela.entity';
import { RolPlataforma } from 'src/common/enums/rol-plataforma.enum';
import { RolEnLoteo } from 'src/common/enums/rol-en-loteo.enum';

async function seed() {
  await AppDataSource.initialize();

  const usuarioRepo = AppDataSource.getRepository(Usuario);
  const parcelaRepo = AppDataSource.getRepository(Parcela);
  const habitanteRepo = AppDataSource.getRepository(HabitanteParcela);

  const admin = usuarioRepo.create({
    nombre: 'Admin',
    apellido: 'Test',
    email: 'admin@test.cl',
    password: 'hashed123',
    rut: '12345678-9',
    telefono: '912345678',
    rol: RolPlataforma.SUPER_ADMIN,
    estaActivo: true,
  });

  const residente = usuarioRepo.create({
    nombre: 'Residente',
    apellido: 'Uno',
    email: 'residente@test.cl',
    password: 'hashed456',
    rol: RolPlataforma.RESIDENTE,
    estaActivo: true,
  });

  await usuarioRepo.save([admin, residente]);

  const parcela = parcelaRepo.create({
    // Rellena con campos mínimos válidos que tu entidad requiera
    direccion: 'Parcela 1',
    codigo: 'P1',
    // otros campos si aplica
  });

  await parcelaRepo.save(parcela);

  const habitante = habitanteRepo.create({
    usuario: residente,
    parcela: parcela,
    rolEnParcela: RolEnLoteo.RESIDENTE,
    fechaInicioRelacion: new Date(),
  });

  await habitanteRepo.save(habitante);

  console.log('🌱 Datos de prueba insertados.');
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('❌ Error al insertar datos seed:', err);
  process.exit(1);
});
